import React from 'react'
import {Headerdata} from "../components/Config/Headerdata"
import Link from 'next/link'
import style from "../components/CSS/Mobilemanu.module.css"
import Site_logo from "../public/img/LOGO.png"
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
interface props{
manu:boolean,
turnOff: () => void
}
const Mobilemanu = (props:props) => {

  return (<>
{props.manu && props.manu ==true?<div className='bg-black h-screen	'>


{/* manu header */}
<div className='flex justify-between items-center bg-black'> 
<div id={style.site_logo} className="">
<Image src={Site_logo} 
 width={100}
 height={100}
/>

</div>
<div>
<IoClose onClick={props.turnOff} className='text-white text-3xl mr-3 cursor-pointer	'/> 
</div>



</div>


{/* manu header */}
      {Headerdata && Headerdata.map((e,indx)=>{

          return (
              <div key={indx} onClick={props.turnOff} className='cursor-pointer text-white font-sans font-semibold p-5 text-center border-b-2  hover:text-slate-200 '>
<Link href={e.path} className='text-white'>{e.name}</Link>

              </div>
          )
        
          
      })}
    </div>:null
}
    </>
  )
}


export default Mobilemanu
