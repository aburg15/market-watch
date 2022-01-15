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
      {stockCards}
    </div>
  );
}

export default StockContainer;