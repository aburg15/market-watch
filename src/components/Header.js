import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ filterStocks, themeToggler, theme }) => {
  return (
    <header className={theme === 'light' ? 'header' : 'header-dark'}>
      <img className='logo' src={logo} alt='logo' />
      <div className="search-container">
        <Link to="/" className='header-link'>
          <h1 className={theme === 'light' ? 'header-title' : 'header-title-dark'}>MARKET WATCH</h1>
        </Link>
        {useLocation().pathname === '/' && <SearchForm filterStocks={filterStocks} />}
      </div>
      <div className='toggle'>
        <div className='toggle-section'>  
          <label className="switch">
            <input type="checkbox" onChange={() => themeToggler()} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  filterStocks: PropTypes.func.isRequired
}