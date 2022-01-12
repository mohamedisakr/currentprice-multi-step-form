import {Form, Formik} from 'formik'

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

export default Step4
