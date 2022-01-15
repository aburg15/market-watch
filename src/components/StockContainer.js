import '../css/StockContainer.css';
import Stock from './Stock';


const StockContainer = ({ stocks }) => {
  const stockCards = stocks.map((stock, index) => {
    return (
      <Stock 
        id={stock.id}
        name={stock.name}
        image={stock.image}
        price={stock.current_price}
        market_cap={stock.market_cap}
        percent_change={stock.price_change_percentage_24h}
        key={index}
      />

    )
  })
  return (
    <div className="stock-container">
      <section className="stock-container-label">
        <img className="stock-img-label" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?154703357" /> 
        <div className='stock-label-details'>
          <p>STOCK</p>
          <p>CURRENT PRICE</p>
          <p>24 HR % CHANGE</p>
          <p>MARKET CAP</p>
        </div>
      </section>
      {stockCards}
    </div>
  );
}

export default StockContainer;