import '../css/Header.css';
import SearchForm from './SearchForm';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <img className='logo' src={logo} alt='logo' />
      <h1>MARKET WATCH</h1>
    </header>
  );
}

export default Header;