import '../css/SearchForm.css';
import PropTypes from 'prop-types';

const SearchForm = ({ filterStocks }) => {
  return (
    <form className="search-form">
      <input
        className='search-bar'
        type='text'
        name='search'
        placeholder='search for a stock'
        onChange={(e) => filterStocks(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  filterStocks: PropTypes.func.isRequired
}