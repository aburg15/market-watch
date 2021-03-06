import '../css/StockContainer.css';
import Stock from './Stock';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

const StockContainer = ({ stocks, filteredStocks, formInput, error, theme }) => {
  const stockCards = stocks.map((stock, index) => {
    return (
      <Link to={'/' + stock.id} key={index} className={theme === 'light' ? 'stock-link' : 'a-dark'}>
        <Stock
          id={stock.id}
          name={stock.name}
          image={stock.image}
          price={stock.current_price}
          market_cap={stock.market_cap}
          percent_change={stock.price_change_percentage_24h}
          total_supply={stock.total_supply}
          theme={theme}
          key={index}
        />
      </Link>
    )
  })

  const filteredStockCards = filteredStocks.map((stock, index) => {
    return (
      <Link to={'/' + stock.id} key={index} className='stock-link'>
        <Stock
          id={stock.id}
          name={stock.name}
          image={stock.image}
          price={stock.current_price}
          market_cap={stock.market_cap}
          percent_change={stock.price_change_percentage_24h}
          total_supply={stock.total_supply}
          theme={theme}
          key={index}
        />
      </Link>
    )
  })

  const displayedStocks = () => {
    if (filteredStockCards.length) {
      return filteredStockCards
    } else if (!filteredStockCards.length && formInput.length > 0) {
      return filteredStockCards
    } else {
      return stockCards
    }
  }

  return (
    <div className="stock-container">
      {error ? <ErrorPage error={error} /> :
        <section className="stock-container-label">
          <img className="stock-img-label" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?154703357" />
          <div className='stock-label-details'>
            <p className="stock-label-name">STOCK</p>
            <p className="stock-label">CURRENT PRICE</p>
            <p className="stock-label label-percent">24 HR % CHANGE</p>
            <p className="stock-label label-market">MARKET CAP</p>
          </div>
        </section>}
      {displayedStocks()}
    </div>
  );
}

export default StockContainer;

StockContainer.propTypes = {
  stocks: PropTypes.array.isRequired,
  filteredStocks: PropTypes.array.isRequired,
  formInput: PropTypes.string.isRequired,
}