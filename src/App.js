import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css'

const apiEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'

export const read = async () => {
  try {
    const res = await axios.get(`${apiEndpoint}`)
    return res
  } catch (err) {
    console.log(`Error : ${err}`)
    return err.response.data.error
  }
}

const App = () => {
  const [prices, setPrices] = useState({})

  useEffect(() => {
    loadPrices()
  }, [])

  const loadPrices = async () => {
    const {data} = await read()
    setPrices(data)
    const {time, disclaimer, chartName, bpi} = data
    const {USD, GBP, EUR} = bpi
    console.log(bpi)
  }

  return (
    <>
      {/* <div className="parent">
        <div className="child">
          <div className="grand-child">
            <p>grandchild</p>
          </div>
        </div>
      </div> */}
      <div>
        <pre>{JSON.stringify(prices, null, 4)}</pre>
      </div>
    </>
  )
}

export default App
