import ShopCard from "./ShopCard.jsx";

const CardsView = ({ cards }) => {
  return (
    <div className='store-view cards-view'>
        {cards.map((item, idx) => (<ShopCard key={'card-' + idx} card={item}/>))}
    </div>
  );
};

export default CardsView;