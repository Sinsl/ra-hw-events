const Toolbar = ({filterNames, selected, onSelectFilter}) => {
  return (
    <ul className="toolbar">
      {filterNames.map((item) => (
      <li 
        key={item} 
        className={item === selected ? 'toolbar-item toolbar-item-active' : 'toolbar-item'}
        onClick={() => onSelectFilter(item)}>
        {item}
      </li>))}
    </ul>
  );
};

export default Toolbar;