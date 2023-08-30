import { motion} from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const h2Varient={
  hidden:{
    x:'100vw'
  },
  visible:{
    x:0,
    transition:
    {type:'spring',
    stiffness:300
  }
  }
}
const buttomVarient={
  hidden:{
    x:'100vw'
  },
  visible:{
    x:0,
    transition:
    {type:'spring',
    stiffness:300
  }
  },
  hover:{
    scale:1.1,
      boxShadow:"0px 0px 5px white",
      transition:{
        yoyo:Infinity
      }
  },
  exit:{
    x:'-100vw'
  }
}

const container={
hidden:{
opacity:0
},
visible:{
opacity:1

},

exit:{
x:'-100vw',
transition:{
  ease:'easeInOut'
}
}



}

const Home = () => {
  return (
    <motion.div className="home container" initial='hidden' animate='visible' exit='exit' variants={container}>
      <motion.h2 variants={h2Varient} initial='hidden' animate='visible' exit={'exit'}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttomVarient} initial='hidden' animate='visible'  whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/> 
    </motion.div>
  )
}

export default Home;