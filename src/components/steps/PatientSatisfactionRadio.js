import React, {useContext} from 'react'

import {FormItem} from '../../new-paradigm/FormHelpers' //'./FormHelpers'
import AppContext from '../../new-paradigm/AppContext'
// import shippingMethods from './shippingMethods'
import SatisfactionTypes from './SatisfactionTypes'

const PatientSatisfactionRadio = ({setFormData, formData, navigation}) => {
  const {selectedOption} = formData
  const {previous, next, go} = navigation

  const appContext = React.createContext() // useContext(AppContext)
  const {isReviewMode} = appContext

  return (
    <div className="form">
      <h3>Patient Satisfaction</h3>

      {Object.entries(SatisfactionTypes).map(([value, name]) => (
        <FormItem
          key={value}
          label={name}
          name="selectedOption"
          value={value}
          checked={selectedOption === value}
          onChange={setFormData}
          type="radio"
        />
      ))}
      <pre>{JSON.stringify(selectedOption, null, 4)}</pre>
      <div className="w3-bar">
        {isReviewMode ? (
          <button
            className="w3-button w3-dark-grey w3-border w3-right"
            type="button"
            onClick={() => go('review')}
          >
            Review Order
          </button>
        ) : (
          <>
            <button
              className="w3-button w3-white w3-border w3-left"
              type="button"
              onClick={previous}
            >
              ‹ Customer Info
            </button>
            <button
              className="w3-button w3-white w3-border w3-right"
              type="button"
              onClick={() => {
                appContext.isReviewMode = true
                next()
              }}
            >
              Review Order ›
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default PatientSatisfactionRadio

/*
import React, {useState} from 'react'
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Slider,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import SatisfactionTypes from './SatisfactionTypes'

const PatientSatisfactionRadio = ({formData, setFormData, navigation}) => {
  let {selectedOption, amount, retryNow, retryLater} = formData
  const {previous, next, go} = navigation

  return (
    <Container maxWidth="xs">
      // <h3>Patient Satisfaction</h3> 
      <Box sx={{minWidth: 120}}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Patient Satisfaction</FormLabel>
          <RadioGroup
            aria-label="Patient Satisfaction"
            defaultValue={selectedOption}
            name="radio-buttons-group"
          >
            {Object.entries(SatisfactionTypes).map(([value, name]) => {
              console.log(`value : ${value}, name: ${name}`)
              console.log(`selected option : ${selectedOption}`)
              return (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={name}
                  key={value}
                  name={name}
                  onChange={setFormData}
                />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  )
}

export default PatientSatisfactionRadio
*/
