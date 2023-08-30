import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const  containerVarient={
hidden:{
opacity:0,
x:'100vw'
},
visible:{
opacity:1,
x:0,
transition:{
  delay:0.2,duration:0.5,type:"spring",stiffness:100
} 


},
exit:{
  x:'-100vw',
  transition:{
    ease:'easeInOut'
  }
}


}
const  spanVarient={
hidden:{
opacity:0,

},
visible:{
opacity:1,

transition:{
  delay:0.1,
  duration:0.1
},

},
hover:{
  scale:1.5,
  originX:0,
   fontSize:'32px',color:'orange'
}



}
const buttonVariants={
  hover:{
    scale:1.1,
     boxShadow:"0px 0px 8px white",color:'orange',
     transition:{
      yoyo:Infinity
     }
  }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" variants={containerVarient}  initial="hidden" animate='visible' exit='exit'>

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <motion.span className={spanClass} variants={spanVarient}  initial='hidden' animate='visible' whileHover='hover'>{ base }</motion.span>
            </li>
          ) 
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" initial={{x:'-100vw'}} animate={{x:0}} transition={{type:"spring",stiffness:200}}>
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover='hover'>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;