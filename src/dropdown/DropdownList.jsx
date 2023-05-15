import data from './data.js';
import { useState } from 'react';
const DropdownList = () => {
  
  const [activeEl, setActive] = useState("");
  const onClickHandler = (e, item) => {
    e.preventDefault();
    setActive(item)
  }
  return (
    <ul className="dropdown">
      {data.map((item, idx) => (
      <li key={"item-" + idx} 
        className={activeEl === item ? "active" : ""}>
          <a href="#" onClick={(e) => onClickHandler(e, item)}>{item}</a>
      </li>))}
    </ul>
  );
};

export default DropdownList;