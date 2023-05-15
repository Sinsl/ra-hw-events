import './filter.css';
import data from './data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { useState } from 'react';

const Portfolio = () => {
  const filterNames = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState('All');
  const [dataFilter, setFilter] = useState(data);
  
  const onClickSelect = (filter) => {
    setSelected(filter);
    filter === "All"
    ? setFilter(data)
    : setFilter(data.filter(item => item.category === filter));
  }
  return (
    <div className='container portfolio'>
      <Toolbar filterNames={filterNames} selected={selected} onSelectFilter={onClickSelect}/>
      <ProjectList list={dataFilter}/>
    </div>
  );
}

export default Portfolio;