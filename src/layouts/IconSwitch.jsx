import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">{
      icon === "view_list"
      ? <ViewListIcon onClick={onSwitch}/>
      : <ViewModuleIcon onClick={onSwitch}/>
      
    }</div>
  );
};

export default IconSwitch;