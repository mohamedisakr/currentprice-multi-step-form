import React from 'react'
import {useForm, useStep} from 'react-hooks-helper'
import CustomerInfo from './steps/CustomerInfo'
import PatientSatisfaction from './steps/PatientSatisfaction'
import Review from './steps/Review'
import Submit from './steps/Submit'

const defaultData = {
  name: '',
  selectedOption: '',
  amount: 0,
  retryNow: '',
  retryLater: '',
}

const steps = [
  {id: 'CustomerInfo'},
  {id: 'PatientSatisfaction'},
  {id: 'Review'},
  {id: 'Submit'},
]

const MultiStepForm = () => {
  const [formData, setFormData] = useForm(defaultData)
  const {step, navigation} = useStep({steps, initialStep: 0})

  const props = {formData, setFormData, navigation}

  switch (step.id) {
    case 'CustomerInfo':
      return <CustomerInfo {...props} />
    case 'PatientSatisfaction':
      return <PatientSatisfaction {...props} />
    case 'Review':
      return <Review {...props} />
    case 'Submit':
      return <Submit {...props} />
    default:
      return <></>
  }

  return (
    <div>
      <h1>Multi-step Form</h1>
    </div>
  )
}

export default MultiStepForm
