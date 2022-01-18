import '../css/Stock.css';
import PropTypes from 'prop-types';

const Stock = ({ name, image, price, market_cap, percent_change, theme }) => {

  return (
    <section className='stock'>
      <img className='stock-img' src={image} alt='stock-image' />
      <div className={theme === 'light' ? 'stock-details' : 'stock-details-dark'}>
        <div>
          <h2 className='stock-title'>{name}</h2>
        </div>
        <p className='stock-price'>${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p className={percent_change > 0 ? 'percent-change-green' : 'percent-change-red'}>{percent_change.toFixed(2) + '%'}</p>
        <p className='market-cap'>${market_cap.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </section>
  );
}

export default Stock;

Stock.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  market_cap: PropTypes.number.isRequired,
  percent_change: PropTypes.number.isRequired
}