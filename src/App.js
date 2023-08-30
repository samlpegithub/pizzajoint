import React, { useState } from 'react';
import { Route, Switch ,useLocation} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
let location=useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setshowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setshowModal={setshowModal}/>
      <AnimatePresence exitBeforeEnter onExitComplete={()=>setshowModal(false)}>

      <Switch location={location} key={location.key}>
        <Route exact path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route exact path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route exact path="/order">
          <Order pizza={pizza} setshowModal={setshowModal}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;