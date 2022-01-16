import '../css/SearchForm.css';

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