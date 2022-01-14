import React from 'react'
import {useForm, useStep} from 'react-hooks-helper'
import CustomerInfo from './steps/CustomerInfo'
import PatientSatisfaction from './steps/PatientSatisfaction'
import PatientSatisfactionRadio from './steps/PatientSatisfactionRadio'
import Review from './steps/Review'
import Submit from './steps/Submit'

const defaultData = {
  name: '',
  selectedOption: 'Satisfied',
  amount: 0,
  retryNow: '',
  retryLater: '',
}

const steps = [
  {id: 'CustomerInfo'},
  {id: 'PatientSatisfactionRadio'},
  // {id: 'PatientSatisfaction'},
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
    // case 'PatientSatisfaction':
    //   return <PatientSatisfaction {...props} />
    case 'PatientSatisfactionRadio':
      return <PatientSatisfactionRadio {...props} />
    case 'Review':
      return <Review {...props} />
    case 'Submit':
      return <Submit {...props} />
    default:
      return <></>
  }
}

export default MultiStepForm
