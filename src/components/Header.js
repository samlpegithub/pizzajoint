import React from 'react';
 import {motion} from 'framer-motion'

const h1Variants={
  hidden:{
    y:-250
  },
  visible:{
    y:-10,
    transition:{
      delay:0.5,
      duration:0.2,
      type:"spring",
      stiffness:400
    }
  }
}
const svgVariants={
  hidden:{
rotate:-180
},
visible:{
    rotate:0,
    transition:{
      duration:1
    }

  }

}
 const pathVariants={
  hidden:{
opacity:0,
pathLength:0
},
visible:{
  opacity:1,
  pathLength:1,
    transition:{
      duration:3
    }

  }

}
 const Header = () => {
  return (
    <header>
      <motion.circle className="logo"   initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }} drag 
  dragConstraints={{left:0,right:0,bottom:0,top:0}} dragElastic={0.2}>
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" variants={svgVariants} initial='hidden' animate='visible'>
          <motion.path 
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"  variants={pathVariants} initial='hidden' animate='visible'
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants} initial='hidden' animate='visible'    />
        </motion.svg>
      </motion.circle>
      <div className="title">
        <motion.h1 variants={h1Variants} initial='hidden' animate='visible' >Pizza Joint</motion.h1>
      </div>
    </header>
  )
}

export default Header;