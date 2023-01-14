
import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Image from 'next/image';
import metamask from "../public/Wallet/metamask.png"
import walletconnect from "../public/Wallet/walletconnect.png"
import coinbase from "../public/Wallet/coinbase.png"
//connectors
import { injected, walletconnect as walletconnectt, resetWalletConnector, walletlink } from '../Helpers/connectors';
//func helper
import {connectMetamaskSimple} from "../Helpers/helper"
//redux
import { useAppSelector, useAppdispatch } from '../hook/redux';
import {setOpenmodel,setOffmodel} from "../Store/walletSlice"
import { useWeb3React } from "@web3-react/core";

const walletData =[
{
    name:"metamask",
    icon:metamask.src,
    provider:injected

},
{
    name:"walletconnect",
    icon:walletconnect.src,
    provider:walletconnectt
}
,
{
    name:"coinbase",
    icon:coinbase.src,
    provider:walletlink
}

]


const Wallet = ()=> {
    const {account,
        activate,
        active,
        chainId,
        connector,
        deactivate,
        error,
        setError,} = useWeb3React(); 
    const wallet_model = useAppSelector((state:any) => state.wallet);
    const dispatch = useAppdispatch()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex:10
        },
      };
      
  
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
       
      }
   
  
    function closeModal() {
        dispatch(setOffmodel())
    }
   //Connect_wallet
  const Connect_wallet = (connector:any,provider:any)=>{

    try{
    connectMetamaskSimple(connector,provider);
    dispatch(setOffmodel())

}catch{

    }


  }


//for 

React.useEffect(() => {
  
    //need to ck local store
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !active && !error) {
          activate(injected)
        }
      })
      .catch(() => {
  
      })
  }, [])
  
  
  return (
 <>
  <div className='z-10'>
      <Modal
        isOpen={wallet_model.walletmodel}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="wallet model"
      >
     
       
<div className='max-w-md	'>
<h2 className='text-2xl font-semibold'>Connect Wallet</h2>
<p className='font-serif subpixel-antialiased mt-1'>Start by connecting with one of the wallets below.
 Be sure to store your private keys or seed phrase securely. Never share them with anyone.</p>

<div className="grid gap-4 grid-cols-2 mt-5 gap-y-4">
{walletData && walletData.map((el,index)=>{

    return <div key={index} className='m-auto' onClick={()=>Connect_wallet(activate,el.provider)}>
   <div className='w-11 m-auto text-center	'>
    
    <Image width={50} height={50} src={el.icon} />
    
    </div> 
{el.name}


    
    </div>
})}
</div>



</div>




      </Modal>
    </div>
 </>
  )
}


export default Wallet

