import {useEffect, useState} from 'react'
import ModalScreen from '../forms/ModalScreen'
import {read} from '../services/bitcoin'

const BitcoinCard = () => {
  const [bitCoin, setBitCoin] = useState({})
  const [modal, setModal] = useState(false)

  useEffect(() => {
    loadBitcoin()
  }, [])

  const loadBitcoin = async () => {
    const data = await read()
    setBitCoin(data)
    // console.log(`result : ${JSON.stringify(data, null, 4)}`)
  }

  // const {time, disclaimer, chartName, bpi} = prices
  // const {USD, GBP, EUR} = bpi
  // console.log(`prices : ${JSON.stringify(prices, null, 4)}`)

  const handleReviewClick = (event) => {
    event.preventDefault()
    setModal(true)
  }

  const handleClose = (event) => {
    event.preventDefault()
    setModal(false)
  }

  return (
    <div className="row d-flex justify-content-center">
      {bitCoin &&
        bitCoin.time &&
        bitCoin.disclaimer &&
        bitCoin.chartName &&
        bitCoin.bpi && (
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
              <div className="card-header">Bitcoin Rate</div>
              <ul className="list-group list-group-flush">
                {/* {Object.entries(bitCoin).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))} */}
                <li className="list-group-item">{`Date: ${bitCoin.time.updated}`}</li>
                <li className="list-group-item">{`Summary: ${bitCoin.disclaimer}`}</li>
                <li className="list-group-item">{`Coin: ${bitCoin.chartName}`}</li>
                <li className="list-group-item">{`USD Rate: ${bitCoin.bpi.USD.rate}`}</li>
              </ul>
              <div className="card-body">
                <button className="btn btn-primary" onClick={handleReviewClick}>
                  Review
                </button>
              </div>
            </div>
          </div>
        )}
      {modal ? <ModalScreen handleClose={handleClose} /> : ''}
      <div>{/* <pre>{JSON.stringify(bitCoin, null, 4)}</pre> */}</div>
    </div>
  )
}

export default BitcoinCard
