import React, {useState} from 'react'

const MultiStepForm = () => {
  const [selectedOption, setSelectedOption] = useState('satisfied')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [retryNow, setRetryNow] = useState('')
  const [retryLater, setRetryLater] = useState('')

  const handleOptionChange = (event) => {
    console.log(`event : ${event.target.value}`)
    setSelectedOption(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleSliderChange = (event) => {
    setAmount(event.target.value)
  }

  const handleRadioGroupChange = (event) => {
    const {value, checked} = event.target

    // <input type="radio" name="preferred" value="now" />
    // I want to retry now
    // <input type="radio" name="preferred" value="later" />
    // I want to retry later

    if (value === 'now' && checked === true) {
      setRetryNow('I want to retry now')
      setRetryLater('')
    } else {
      setRetryLater('I want to retry later')
      setRetryNow('')
    }
    console.log(`radio change value : ${value}`)
    console.log(`radio checked value : ${checked}`)
  }

  return (
    <>
      <select name="dropDown" id="dropDown" onChange={handleOptionChange}>
        {/* <option value="">--Please choose an option--</option> */}
        <option value="satisfied">Satisfied</option>
        <option value="unsatisfied">Unsatisfied</option>
        <option value="indifferent">Indifferent</option>
      </select>
      {selectedOption === '' ? (
        <div>Required field</div>
      ) : selectedOption === 'satisfied' ? (
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </div>
      ) : selectedOption === 'unsatisfied' ? (
        <div>
          <input
            type="range"
            id="unsatisfiedRange"
            name="unsatisfiedRange"
            min="0"
            max="20"
            value={amount}
            onChange={handleSliderChange}
            step="1"
          ></input>
          <label>How unsatisfied are you?</label>
        </div>
      ) : (
        <div
          onChange={handleRadioGroupChange}
          style={{display: 'flex', flexDirection: 'column'}}
        >
          {/* https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs */}
          <p>Please select your preferred option:</p>
          <input type="radio" name="preferred" value="now" /> I want to retry
          now
          <input type="radio" name="preferred" value="later" /> I want to retry
          later
        </div>
      )}
      <div>
        <pre>
          {JSON.stringify(
            {selectedOption, name, amount, retryNow, retryLater},
            null,
            4,
          )}
        </pre>
      </div>
    </>
  )
}

export default MultiStepForm

//#region  working before adding more component state
/*
import React, {useState} from 'react'

const MultiStepForm = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event) => {
    console.log(`event : ${event.target.value}`)
    setSelectedOption(event.target.value)
  }
  return (
    <>
      <select name="dropDown" id="dropDown" onChange={handleOptionChange}>
        <option value="">--Please choose an option--</option>
        <option value="satisfied">Satisfied</option>
        <option value="unsatisfied">Unsatisfied</option>
        <option value="indifferent">Indifferent</option>
      </select>
      {selectedOption === '' ? (
        <div>Required field</div>
      ) : selectedOption === 'satisfied' ? (
        <div>
          <label>Enter your name:</label>
          <input type="text" id="name" name="name"></input>
        </div>
      ) : selectedOption === 'unsatisfied' ? (
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
      ) : (
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
      )}
    </>
  )
}

export default MultiStepForm
*/
//#endregion
