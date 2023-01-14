import React, { useEffect, useMemo, useState } from 'react'
import Image from "next/image"
import { BiChevronLeft } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import Placeholder from "../components/Placeholder"
import Boxplaceholder from "../components/Boxplaceholder"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Getnftmetadata } from '../hook/Getnftdata';
import { useGQLQuery } from '../hook/useGQLQuery';
import { ConvertLink } from '../hook/Useipfslink';
import {GetCOllection,GET_FLOOR,Get_collection_NFT} from "../graphql/Queries";
export const Statichomea = (data:any) => {
    const router = useRouter();
    const { collections:url } = router.query
    const [meta,setMeta] = useState<metadata>()
    const [imgloaded,setimgloaded] = useState(false);

useEffect(()=>{
    let run = false;
    if(!run){
        Callmeta();
    }
  return()=>{
    run = true;

}

},[data.data])
    //const data = infostate?infostate.infostate.data:[];
     const Listed= data?.data;
     const collectionData = Listed?Listed.collections[0]:null
      const dayData = collectionData && collectionData.dayData[0]?.dailyVolumeBNB;
      const nfts = collectionData && collectionData.nfts[0];
      const numberTokensListed = collectionData && collectionData.numberTokensListed;
     const Floor = collectionData && nfts.currentAskPrice;
  


const Callmeta = async()=>{
    nfts &&  Getnftmetadata(`${ConvertLink(nfts.metadataUrl)}`).then((message:any) => { 
        setMeta(message)
        }).catch((message:any) => { 
    console.log(message);
    
        });
}

if (data.loading) return (<div>
    <div className='flex gap-4 mb-4 items-center p-10'>
    <Skeleton circle width={70} height={70} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>
    <div className='pt-3 md:flex-1'>
    <Skeleton  borderRadius={5} count={5}  height={10} width={200 } highlightColor="#b0a7a7" baseColor="#e7e7e7"/>
    </div>
    </div>
    </div>)


    
  return (
    <div>

{/* cover */}

<div className='h-auto flex '>

<div className='p-10'>

<div className='md:flex gap-4 mb-4 items-center'>
{!meta?<Skeleton circle width={70} height={70} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>:<div className='relative w-fullbox-border md:pl-15 md:pr-15 md:pt-6	'>
<LazyLoadImage effect='blur'  placeholderSrc="asasa" src={meta && ConvertLink(meta?.image)} className="rounded-xl  z-1 w-20 md:w-28	top-9	md:border-4"/>

</div>}

<div className='pt-3 md:flex-1 '>
{!meta?<Skeleton  borderRadius={5} height={30} width={100} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>: 
<h1 className='antialiased	text-xl font-bold w-3/4	 leading-normal	font-sans	'>{meta && meta?.name}</h1>}
{!meta?<Skeleton  borderRadius={5} count={5}  height={10} width={200 } highlightColor="#b0a7a7" baseColor="#e7e7e7"/>: 
<p className='max-w-[400px] overflow-hidden text-ellipsis font-light line-clamp-1'>{meta && meta?.description}
</p>}

</div>


</div>


<div className='flex gap-8'>

    <div>
{!data?<Skeleton  borderRadius={5} height={30} width={50} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>: 
<h2 className='font-semibold text-xl'>{numberTokensListed && numberTokensListed}</h2>}

        <p className='font-light text-gray-500 text-sm'>Items</p>
    
    </div>
    <div className=''>
{  !data?<Skeleton  borderRadius={5} height={30} width={50} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>: 
  <h2 className='font-semibold text-xl'>{dayData ==null?0:dayData} ETH</h2> }
    <p className='font-light text-gray-500 text-sm'>Total volume</p>

    </div>
    <div>
{!data?<Skeleton  borderRadius={5} height={30} width={50} highlightColor="#b0a7a7" baseColor="#e7e7e7"/>: 
    <h2 className='font-semibold text-xl'>{Floor && Floor} ETH</h2> }
    <p className='font-light text-gray-500 text-sm'>Floor</p>

    </div>


    
</div>
</div>


{/* item dynamic data */}

</div>

{/* cover */}


    </div>
  )
}