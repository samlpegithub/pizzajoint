import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const spanVariants={
  hidden:{
opacity:0
},
  visible:{
opacity:1,
transition:{
  delay:0.1,
  duration:0.1,
  type:"spring",
  stiffness:300
}

  },
  hover:{
    fontSize:'32px',originX:0,color:'orange'
  }
}
const buttonVariants={
  hidden:{
opacity:0,
x:'-100vw'
},
  visible:{
opacity:1,
x:0,
transition:{
  
  type:"spring",
  stiffness:200
}

  },
  hover:{
    scale:1.1, boxShadow:"0px 0px 8px white",color:"orange",
    transition:{
     yoyo: Infinity
    }
  }
}
const containerVarient={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      delay:0.2,
      duration:0.3
    }
  },

  exit:{
    x:'-100vw',
    transition:{
      ease:'easeInOut'
    }
  }
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" variants={containerVarient} initial='hidden'  animate='visible' exit='exit'>
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <motion.span variants={spanVariants} className={spanClass} whileHover='hover' >{ topping }</motion.span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button className="next" variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;