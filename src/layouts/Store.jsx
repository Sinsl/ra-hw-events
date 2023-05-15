import './layouts.css'
import { useState } from 'react';
import products from './products';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';


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