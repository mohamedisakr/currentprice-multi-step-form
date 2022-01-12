import {Field, Form, Formik} from 'formik'

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

export default Step1
