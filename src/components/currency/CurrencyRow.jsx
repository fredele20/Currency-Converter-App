import React from 'react'
import "./style.js"
import { Convert } from './style.js'

export default function CurrencyRow(props) {

  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div>
      <Convert>
        <input type="number" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {
            currencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))
          } 
        </select>
      </Convert>
    </div>
  )
}
