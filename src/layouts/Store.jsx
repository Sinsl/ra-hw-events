import './layouts.css'
import { useState } from 'react';
import products from './products.js';
import CardsView from './CardsView.jsx';
import ListView from './ListView.jsx';
import IconSwitch from './IconSwitch.jsx';


const Store = () => {
  const [icon, setIcon] = useState("view_list");

  const onSwitchHandler = () => {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  }

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={onSwitchHandler}/>
      {icon === "view_list" ? <CardsView cards={products}/> : <ListView item={products}/>}
    </div>
  );
};

export default Store;