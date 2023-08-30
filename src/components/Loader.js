import { motion, useCycle } from 'framer-motion'
import React from 'react'
const LoaderVariants={
  animationOne:{
    x:[-20,20],
    y:[0,-30],
    transition:{
      x:{
        duration:0.5,
        yoyo:Infinity
      },
       y:{
        
        yoyo:Infinity,
        duration:0.25,
      },
    }
  },
  animationTwo:{
    y:[-40,0],
    x:0,
    transition:{
      y:{
    yoyo:Infinity,
      duration:0.25,
      ease:'easeOut'
      }
    }
  }
}
const Loader = () => {
  let [animation,cycleanimtion]=useCycle('animationOne','animationTwo')
  return (
    <>
      <motion.div variants={LoaderVariants} animate={animation} className='Loader'>
    
      </motion.div>
      <div onClick={()=>cycleanimtion()}>Cycle Loader</div>
    </>
  )
}

export default Loader
