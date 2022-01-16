import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png'

const Header = ({ filterStocks }) => {
  return (
    <header className="header">
      <img className='logo' src={logo} alt='logo' />
      <h1>MARKET WATCH</h1>
      <SearchForm filterStocks={filterStocks} />
    </header>
  );
}

export default Header;