import {Field, Form, Formik} from 'formik'
import {useEffect, useState} from 'react'
import './App.css'
import MultiStepForm from './forms/MultiStepForm'
import {read} from './services/bitcoin'

const stepOne = () => {
  return (
    <Formik>
      {() => (
        <Form>
          {/* a drop-down of  ["satisfied", "unsatisfied" and "indifferent" ] 
          is displayed, 
          such that if i select "satisfied",  a "enter your name" 
          input box should show below the drop-down. 
          if i select "unsatisfied", a "how unsatisfied are you" slider (0 - 20) should show below the 
          drop-down, if i select "indifferent", 2 radio buttons of "I want to 
          retry now" and "I want to retry later" should show below the drop-down. */}
          <div>
            <label>Choose an option:</label>
            <select name="dropDown" id="dropDown">
              <option value="satisfied">Satisfied</option>
              <option value="unsatisfied">Unsatisfied</option>
              <option value="indifferent">Indifferent</option>
            </select>
          </div>

          <div>
            <label>Enter your name:</label>
            <input type="text" id="name" name="name"></input>
          </div>

          <div>
            <input
              type="range"
              id="unsatisfiedRange"
              name="unsatisfiedRange"
              min="0"
              max="20"
              value="10"
              step="1"
            ></input>
            <label>How unsatisfied are you?</label>
          </div>

          <div>
            <p>Please select your preferred option:</p>

            <div>
              <input
                type="radio"
                id="nowRadio"
                name="nowRadio"
                value="now"
                checked
              ></input>
              <label> I want to retry now</label>
            </div>
            <div>
              <input
                type="radio"
                id="laterRadio"
                name="laterRadio"
                value="later"
              ></input>
              <label> I want to retry later</label>
            </div>
          </div>

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  )
}

const stepTwo = () => {
  return (
    <Formik>
      {() => (
        <Form>
          {/* input box, checkbox, a slider (with values ranging 0 - 20), 
        radio button, and a drop down. */}
          <label>input box:</label>
          <input type="text" id="" name=""></input>

          <input type="checkbox" id="" name="" value="1"></input>
          <label>checkbox</label>

          <div>
            <input type="range" min="1" max="20" value="1" id="slider"></input>

            <input
              type="radio"
              id="radio"
              name="radio"
              value="radio button"
            ></input>
            <label>radio button</label>

            <label>Choose a car:</label>
            <select name="dropDown" id="dropDown">
              <option value="satisfied">Satisfied</option>
              <option value="unsatisfied">Unsatisfied</option>
              <option value="indifferent">Indifferent</option>
            </select>

            <button type="submit">Next</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const Step1 = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>Please choose an option</p>
          <Field as="select" name="satisfied">
            <option value="satisfied">Satisfied</option>
            <option value="unsatisfied">Unsatisfied</option>
            <option value="indifferent">Indifferent</option>
          </Field>

          <p>Enter your name:</p>
          <Field name="name" />

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  )
}

const Step2 = (props) => {
  const [amount, setAmount] = useState(0)

  const handleSubmit = (values) => {
    props.next(values)
  }

  const handleAmountChange = (e) => {}

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <input
            type="range"
            id="unsatisfiedRange"
            name="unsatisfiedRange"
            min="0"
            max="20"
            value="10"
            step="1"
            onChange={handleAmountChange}
          ></input>
          {/* <Field as="range" name="amount"></Field> */}
          <label>How unsatisfied are you?</label>

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  )
}

const Step3 = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <p>Please select your preferred option:</p>

          <div>
            <input
              type="radio"
              id="nowRadio"
              name="nowRadio"
              value="now"
              checked
            ></input>
            <label> I want to retry now</label>
          </div>
          <div>
            <input
              type="radio"
              id="laterRadio"
              name="laterRadio"
              value="later"
            ></input>
            <label> I want to retry later</label>
          </div>

          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  )
}

const Step4 = () => {
  return (
    <Formik>
      {() => (
        <Form>
          <button type="submit">Finish</button>
        </Form>
      )}
    </Formik>
  )
}

const App = () => {
  const [bitCoin, setBitCoin] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState({
    // satisfied: '',
    name: '',
    // unsatisfied: '',
    amount: '',
    // indifferent: '',
    retryNow: '',
    retryLater: '',
  })

  useEffect(() => {
    loadPrices()
  }, [])

  const loadPrices = async () => {
    const data = await read()
    // console.log(`result : ${JSON.stringify(data, null, 4)}`)
    setBitCoin(data)
  }

  const handleNextStep = (newData) => {
    setData((prev) => ({...prev, ...newData}))
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = (newData) => {
    setData((prev) => ({...prev, ...newData}))
    setCurrentStep((prev) => prev - 1)
  }

  const steps = [
    <Step1 next={handleNextStep} data={data} />,
    <Step2 next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Step3 next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Step4 next={handleNextStep} prev={handlePrevStep} data={data} />,
  ]

  console.log(`data : ${JSON.stringify(data, null, 4)}`)
  // const {time, disclaimer, chartName, bpi} = prices
  // const {USD, GBP, EUR} = bpi
  // console.log(`prices : ${JSON.stringify(prices, null, 4)}`)

  return (
    <>
      {/* {steps[currentStep]} */}
      {<MultiStepForm />}
      <br />
      <br />

      {bitCoin &&
        bitCoin.time &&
        bitCoin.disclaimer &&
        bitCoin.chartName &&
        bitCoin.bpi && (
          <div className="card" style={{width: '18rem'}}>
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
              <button className="btn btn-primary">Review</button>
            </div>
          </div>
        )}
      <div>{/* <pre>{JSON.stringify(bitCoin, null, 4)}</pre> */}</div>
    </>
  )
}

export default App
