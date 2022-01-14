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
      {/* <h3>Patient Satisfaction</h3> */}
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
