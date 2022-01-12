import {Form, Formik} from 'formik'

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

export default Step3
