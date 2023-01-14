
import React,{useEffect, useState} from 'react'
import { useWeb3React } from "@web3-react/core";
import { useAppSelector, useAppdispatch } from '../hook/redux'
import {FetchuserNFT,addCard,setOpenmodel,Search} from "../Store/walletSlice"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Lazyload} from "./lazyload"
const HomeComponent =()=>{
    const {active,account} = useWeb3React();
    const {userNFT,userFetchNFT,filter} = useAppSelector((state) => state.wallet);
    const [acc,setacc]= useState();
    const [nft,setnft] = useState();
    let tokenId: MoralisNFT[] = [];
  const dispatch = useAppdispatch()
  

   
  
const GetAllNFT =async ()=>{
    dispatch(FetchuserNFT(acc));

}

const Filter = async()=>{
    dispatch(Search("0x3a15a630553a52af5a315e8a33b2863978d41174"))

}

const Fetch = async()=>{
    if(acc && nft){
        await dispatch(FetchuserNFT(acc));
        await  dispatch(Search(nft));
     
    }else{
        window.alert("Fill both input")
    }

}




//a
//0x6d038f41862deb8de768ea6c9829c6702a9eda69

//cl
//0x6d038f41862deb8de768ea6c9829c6702a9eda69

return (
<>
<div className='p-2 pt-5 sm:p-10 max-w-4xl m-auto'>

<h1 className='text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>NFT ID chekcer</h1>
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 sm:p-10">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
            <input onChange={(e:any)=>setacc(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="subcontract address" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nft collection</label>
            <input onChange={(e:any)=>setnft(e.target.value)}  type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nft address" required/>
        </div>
       
    <button onClick={()=>GetAllNFT()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">FetchAll</button>
    <button onClick={()=>Fetch()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fetch Collection</button>


</div>

</form>


<div className='md:p-10'>
{userFetchNFT=="LOADING" && <h1>Loading </h1>}
{userFetchNFT=="LOADING" && <Lazyload/>}
{filter && filter.map((e:MoralisNFT)=>{
        tokenId.push(e.token_id)
        console.log(tokenId);
        
return (
    <>
    <div className='m-2 border p-5 w-full'>
    <h2>{e.name}</h2>
      <h1 className=''>  tokenid : {e.token_id}</h1>
      <h2 className='mb-3 font-light text-gray-500 dark:text-gray-400'>address: {e.token_address}</h2>

    </div>
    </>
)
})
}

{filter && filter.length !=0 && <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
<CopyToClipboard text={tokenId}
          onCopy={() => ({copied: true})}>
          <span>Copy Token id</span>
        </CopyToClipboard>
</button>}



</div>




<div>





</div>




</div>

</>

)

}

export default HomeComponent