import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
const modal={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1
    }
  }
  const mainmodal={
    hidden:{
        opacity:0,
        y:'-100vh'

    },
    visible:{
        opacity:1,
        y:200,
        transition:{
          delay:0.2
        }
    }
  }
const Modal = ({showModal,setshowModal}) => {
  
    return (
    <div>
      <AnimatePresence exitBeforeEnter>
    
   {  showModal &&<motion.div className='modal' variants={modal}  initial='hidden' animate='visible'>
<motion.div className=' main-modal' variants={mainmodal} initial='hidden' animate='visible' exit='hidden'>
  <p >Want to make another pizza?</p>
  <a href='/'><button onClick={()=>setshowModal(false)}>Start Again</button></a>
</motion.div>
      </motion.div>}




    
      </AnimatePresence>
    </div>
  )
}

export default Modal
