import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './components/currency/CurrencyRow';
import LandingPage from './components/landing/LandingPage';
import MockCurrencies from "./components/MockCurrencies"
import { ConverterDiv, MainDiv } from './styles';
console.log(MockCurrencies.base)


var myHeaders = new Headers();
myHeaders.append("apikey", "");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"

function App() {

  let [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setTocurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount 
  if(amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount*exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {

    fetch(BASE_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setTocurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
    .catch(error => {
      console.log(error)
      console.log(MockCurrencies)
      currencyOptions = MockCurrencies
      setCurrencyOptions([error.base, ...Object.keys(error.rates)])
    });

  }, [])

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <>
      <LandingPage />
      <ConverterDiv>
        <MainDiv>
          <h1>Convert Currency</h1>

          <CurrencyRow
            currencyOptions={currencyOptions} 
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          /> 
          <div className="equals">=</div>
          <CurrencyRow 
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setTocurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </MainDiv>
      </ConverterDiv>
    </>
  );
}

export default App;
