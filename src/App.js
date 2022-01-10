import {useEffect, useState} from 'react'
import './App.css'
import {read} from './services/price'

const App = () => {
  const [prices, setPrices] = useState({})

  useEffect(() => {
    loadPrices()
  }, [])

  const loadPrices = async () => {
    const data = await read()
    console.log(`result : ${data}`)
    setPrices(data)
  }

  // const {time, disclaimer, chartName, bpi} = prices
  // const {USD, GBP, EUR} = bpi
  // console.log(`prices : ${JSON.stringify(prices, null, 4)}`)

  return (
    <>
      {prices.time && prices.disclaimer && prices.chartName && prices.bpi && (
        <div className="card" style={{width: '18rem'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{prices.time.updated} </li>
            <li className="list-group-item">{prices.disclaimer}</li>
            <li className="list-group-item">{prices.chartName} </li>
            <li className="list-group-item">{prices.bpi.USD.code} </li>
          </ul>

          <div className="card-body">
            <button className="btn btn-primary">Review</button>
          </div>
        </div>
      )}
      <div>
        <pre>{JSON.stringify(prices, null, 4)}</pre>
      </div>
    </>
  )
}

export default App

/* 
 <li className="list-group-item">{time.updated} </li>
              <li className="list-group-item">{disclaimer}</li>
              <li className="list-group-item">{chartName} </li>
              <li className="list-group-item">{USD.code} </li>

            
               */
