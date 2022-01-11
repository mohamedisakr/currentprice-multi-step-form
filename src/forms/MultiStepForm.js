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
