import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Header = ({ filterStocks }) => {
  return (
    <header>
      <img className='logo' src={logo} alt='logo' />
      <div className="search-container">
        <h1>MARKET WATCH</h1>
        {useLocation().pathname === '/' && <SearchForm filterStocks={filterStocks} />}
      </div>
    </header>
  );
}

export default Header;