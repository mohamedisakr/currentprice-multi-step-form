import {Form, Formik} from 'formik'
import {useState} from 'react'

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

export default Step2
