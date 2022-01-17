import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ filterStocks }) => {
  return (
    <header>
      <img className='logo' src={logo} alt='logo' />
      <div className="search-container">
        <Link to="/" className='header-link'>
          <h1>MARKET WATCH</h1>
        </Link>
        {useLocation().pathname === '/' && <SearchForm filterStocks={filterStocks} />}
      </div>
    </header>
  );
}

export default Header;