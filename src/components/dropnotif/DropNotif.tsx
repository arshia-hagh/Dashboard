import React from 'react'
import {motion} from 'framer-motion'
function DropNotif() {
  return (
    <motion.ul  initial={{opacity: 0,visibility: 'hidden',pointerEvents: 'none'}} 
     transition={{duration: 1,type: 'tween',ease: 'easeOut'}}
     animate={{opacity: 1,visibility: 'visible',pointerEvents: 'fill'}}    
     className='fixed z-[100] text-center font-normal text-[14px]  w-[140px] text-primery-color top-24 lg:right-52 sm:right-12 bg-secondery-color rounded-xl ' >
        <li className='p-3'><a href="#">message</a></li>
        <li className='p-3'><a href="#">message</a></li>
        <li className='p-3'><a href="#">message</a></li>
        <li className='p-3'><a href="#">message</a></li>
    </motion.ul>
  )
}

export default DropNotif