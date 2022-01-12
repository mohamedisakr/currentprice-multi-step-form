import {useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState({
    // satisfied: '',
    name: '',
    // unsatisfied: '',
    amount: '',
    // indifferent: '',
    retryNow: '',
    retryLater: '',
  })
  const handleNextStep = (newData) => {
    setData((prev) => ({...prev, ...newData}))
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = (newData) => {
    setData((prev) => ({...prev, ...newData}))
    setCurrentStep((prev) => prev - 1)
  }

  const steps = [
    <Step1 next={handleNextStep} data={data} />,
    <Step2 next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Step3 next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Step4 next={handleNextStep} prev={handlePrevStep} data={data} />,
  ]
}

export default Wizard
