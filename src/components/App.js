import '../css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import StockContainer from './StockContainer';
import SelectedPage from './SelectedPage';
import ErrorPage from './ErrorPage';
import { lightTheme, darkTheme, GlobalStyles } from '../themes';
import styled, { ThemeProvider } from "styled-components"

export const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}
`;

const App = () => {

  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [formInput, setFormInput] = useState('');
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState("light");

  const fetchStocks = async () => {
    try {
      const stockData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
      const data = await stockData.json()
      setStocks(data)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchStocks()
  }, [])

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const resetStockContainer = () => {
    setFilteredStocks([])
    setFormInput('')
  }

  const filterStocks = (formInput) => {
    const filteredStocks = stocks.filter(entry => entry.name.toLowerCase().includes(formInput.toLowerCase()))
    setFilteredStocks(filteredStocks)
    setFormInput(formInput)
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <StyledApp>
          <Header filterStocks={filterStocks} theme={theme} themeToggler={themeToggler} />
          <Routes>
            <Route path="/" element={<StockContainer stocks={stocks} filteredStocks={filteredStocks} formInput={formInput} error={error} theme={theme} />} />
            <Route path="/:stockId" element={<SelectedPage resetStocks={resetStockContainer} theme={theme} />} />
            <Route path="/:stockId/*" element={<ErrorPage error={error} />} />
          </Routes>
        </StyledApp>
      </div>
    </ThemeProvider >
  );
}

export default App;
