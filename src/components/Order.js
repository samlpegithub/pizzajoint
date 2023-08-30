import { motion ,AnimatePresence} from 'framer-motion';
import React,{useState,useEffect} from 'react';

const containerVarient={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
x:0,
transition:{
  type:'spring',
  stiffness:300,
  delay:0.5,
  when:'beforeChildren',
  staggerChildren:2
}

  }
}
const paraVariants={
hidden:{
  opacity:0
},
visible:{
  opacity:1
}
}
const Order = ({ pizza ,setshowModal}) => {
  const [showtitle, setshowtitle] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowModal(true)
    }, 5000);
// eslint-disable-next-line
  }, [setshowModal]);

  setTimeout(() => {
    setshowtitle(false)

  }, 6000);
  return (
    <motion.div className="container order" variants={containerVarient} initial='hidden' animate='visible' >
 <AnimatePresence>   { showtitle && <motion.h2  animate={{color:'orange'}}exit={{y:-1000}}>Thank you for your order :)</motion.h2>}</AnimatePresence> 
      <motion.p variants={paraVariants}  >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div className="" variants={paraVariants}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;