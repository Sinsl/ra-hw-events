import './dropdown.css';
import DropdownList from './DropdownList';
import { useState } from 'react';

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  const toggleOpen = (e) => {
    e.preventDefault();
    setToggle(!toggle)
  }
  return (
    <div className="container-dropdown">
      <div className={toggle ? "dropdown-wrapper open" : "dropdown-wrapper"}>
        <button className="btn" onClick={(e) => toggleOpen(e)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
};

export default Dropdown;