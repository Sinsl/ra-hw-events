const ShopItem = ({ item }) => {
  return (
    <div className="card-item">
      <div className="card-item-img" style={{ backgroundImage: `url(${item.img})`}}></div>
      <div className="card-item-title">{item.name}</div>
      <div className="card-item-color">{item.color}</div>
        <div className="card-item-price">${item.price}</div>
        <a className="card-item-add" href="">add to card</a>
    </div>
  );
};

export default ShopItem;