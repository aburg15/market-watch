import '../css/SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        className='search-bar'
        type='text'
        name='search'
        placeholder='search for a stock'
      />
    </form>
  );
}

export default SearchForm;