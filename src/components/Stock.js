import '../css/Stock.css';

const Stock = ({ id, name, image, price, market_cap, percent_change }) => {
  return (
    <section className="stock">
      <img className='stock-img' src={image} alt='stock-image' />
      <div className='stock-details'>
        <div>
          <h2 className='stock-title'>{name}</h2>
        </div>
        <p className='stock-price'>${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>{percent_change}</p>
        <p>{market_cap}</p>
      </div>
    </section>
  );
}

export default Stock;