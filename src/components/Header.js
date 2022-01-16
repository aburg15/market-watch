import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png'

const Header = ({ filterStocks }) => {
  return (
    <header className="header">
      <div className="header-logo-title">
        <img className='logo' src={logo} alt='logo' />
        <h1>MARKET WATCH</h1>
      </div>
      <SearchForm filterStocks={filterStocks} />
    </header>
  );
}

export default Header;