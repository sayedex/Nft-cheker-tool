
import React,{useEffect, useState} from 'react'
import { useWeb3React } from "@web3-react/core";
import { useAppSelector, useAppdispatch } from '../hook/redux'
import {FetchuserNFT,addCard,setOpenmodel,Search} from "../Store/walletSlice"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const HomeComponent =()=>{
    const {active,account} = useWeb3React();
    const {userNFT,userFetchNFT,filter} = useAppSelector((state) => state.wallet);
    const [acc,setacc]= useState();
    const [nft,setnft] = useState();
    let tokenId: MoralisNFT[] = [];
  const dispatch = useAppdispatch()
  

   
  
const GetAllNFT =async ()=>{
    dispatch(FetchuserNFT("0x6d038f41862deb8de768ea6c9829c6702a9eda69"))

}

const Filter = async()=>{
    dispatch(Search("0x3a15a630553a52af5a315e8a33b2863978d41174"))

}

const Fetch = async()=>{
   await dispatch(FetchuserNFT(acc));
   await  dispatch(Search(nft));

}




//a
//0x6d038f41862deb8de768ea6c9829c6702a9eda69

//cl
//0x6d038f41862deb8de768ea6c9829c6702a9eda69

return (
<>
<div className='p-2 sm:p-10'>

<h1>NFT ID chekcer</h1>
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 sm:p-10">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
            <input onChange={(e:any)=>setacc(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nft collection</label>
            <input onChange={(e:any)=>setnft(e.target.value)}  type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
       
    <button onClick={()=>Fetch()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fetch</button>
</div>

</form>


<div className='md:p-10'>
{userFetchNFT=="LOADING" && <h1>Loading </h1>}
{filter && filter.map((e:MoralisNFT)=>{
        tokenId.push(e.token_id)
        console.log(tokenId);
        
return (
    <>
    <div className='m-2 border p-5 w-full'>
      <h1>  token id : {e.token_id}</h1>
      <p>address: {e.token_address}</p>
    </div>
    </>
)
})
}

{filter && <button className='m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
<CopyToClipboard text={tokenId}
          onCopy={() => ({copied: true})}>
          <span>Copy Token id</span>
        </CopyToClipboard>
</button>}



</div>


</div>

</>

)

}

export default HomeComponent