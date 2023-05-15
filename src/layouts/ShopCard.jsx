const ShopCard = ({ card }) => {
  return (
    <div className="card">
      <div className="product-title">{card.name}</div>
      <div className="product-color">{card.color}</div>
      <div className="product-img" style={{ backgroundImage: `url(${card.img})`}}></div>
      {/* <img className="product-img" src={card.img} alt="product"/> */}
      <div className="product-card">
        <div className="product-card-price">${card.price}</div>
        <a className="product-card-add" href="">add to card</a>
      </div>
    </div>
  );
};

export default ShopCard;