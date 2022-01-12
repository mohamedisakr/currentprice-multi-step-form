import {Form, Formik} from 'formik'
import React from 'react'

const StepOne = () => {
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

export default StepOne
