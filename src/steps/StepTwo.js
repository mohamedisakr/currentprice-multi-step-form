import {Form, Formik} from 'formik'
import React from 'react'

const StepTwo = () => {
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

export default StepTwo
