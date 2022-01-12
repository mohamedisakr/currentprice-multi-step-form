import {useEffect, useState} from 'react'
import {Field, Form, Formik} from 'formik'
import './App.css'
import ModalScreen from './forms/ModalScreen'
import MultiStepForm from './forms/MultiStepForm'
import {read} from './services/bitcoin'

const App = () => {
  const [bitCoin, setBitCoin] = useState({})
  const [modal, setModal] = useState(false)

  useEffect(() => {
    loadBitcoin()
  }, [])

  const loadBitcoin = async () => {
    const data = await read()
    // console.log(`result : ${JSON.stringify(data, null, 4)}`)
    setBitCoin(data)
  }

  // console.log(`data : ${JSON.stringify(data, null, 4)}`)

  // const {time, disclaimer, chartName, bpi} = prices
  // const {USD, GBP, EUR} = bpi
  // console.log(`prices : ${JSON.stringify(prices, null, 4)}`)

  const handleReviewClick = (event) => {
    event.preventDefault()
    console.log(`review button clicked`)
    setModal(true)
  }

  const handleClose = (event) => {
    event.preventDefault()
    setModal(false)
  }

  return (
    <>
      {/* {steps[currentStep]} */}
      {/* {<MultiStepForm />} */}
      <br />
      <br />

      {bitCoin &&
        bitCoin.time &&
        bitCoin.disclaimer &&
        bitCoin.chartName &&
        bitCoin.bpi && (
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
              <ul className="list-group list-group-flush">
                {/* {Object.entries(prices).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))} */}
                <li className="list-group-item">{bitCoin.time.updated} </li>
                <li className="list-group-item">{bitCoin.disclaimer}</li>
                <li className="list-group-item">{bitCoin.chartName} </li>
                <li className="list-group-item">{bitCoin.bpi.USD.rate} </li>
              </ul>
              <div className="card-body">
                <button className="btn btn-primary" onClick={handleReviewClick}>
                  Review
                </button>
              </div>

              {/*  Button trigger modal  */}
              {/* <div className="card-body">
              <button
                type="button"
                onClick={handlePreviewButton}
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Review
              </button>
            </div> */}
            </div>
          </div>
        )}
      {modal ? <ModalScreen handleClose={handleClose} /> : ''}
      <div>{/* <pre>{JSON.stringify(bitCoin, null, 4)}</pre> */}</div>
    </>
  )
}

export default App
