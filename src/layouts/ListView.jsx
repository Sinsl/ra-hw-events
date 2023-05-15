import ShopItem from "./ShopItem";

const ListView = ({ item }) => {
  return (
    <div className='store-view list-view'>
        {item.map((el, idx) => (<ShopItem key={'list-' + idx} item={el}/>))}
    </div>
  );
};

export default ListView;