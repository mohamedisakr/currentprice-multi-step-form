import {useState} from 'react'
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Slider,
} from '@mui/material'

// {
//     name: '',
//     selectedOption: '',
//     amount: 0,
//     retryNow: '',
//     retryLater: '',
//   }

const PatientSatisfaction = ({formData, setFormData, navigation}) => {
  let {selectedOption, amount, retryNow, retryLater} = formData
  const [selected, setSelected] = useState('')

  const handleChange = (event) => {
    const {value} = event.target
    console.log(value)
    setSelected(value)
    selectedOption = selected
  }

  const handleSliderChange = (event) => {
    const {value} = event.target
    amount = value
    console.log(`slider ${value}`)
  }

  const handleRadioGroupChange = (event) => {}

  console.log(`selected : ${selected}`)
  console.log(`amount : ${amount}`)
  console.log(`selectedOption : ${selectedOption}`)

  return (
    <Container maxWidth="xs">
      <h3>Patient Satisfaction</h3>
      <Box sx={{minWidth: 120}}>
        <FormControl fullWidth style={{marginTop: '1.5rem'}}>
          <InputLabel id="select-label">Please choose one option</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={selected}
            name={selected}
            onChange={handleChange}
            // label="Please choose one option"
          >
            <MenuItem value="satisfied">Satisfied</MenuItem>
            <MenuItem value="unsatisfied">Unsatisfied</MenuItem>
            <MenuItem value="indifferent">Indifferent</MenuItem>
          </Select>

          {selected === 'satisfied' ? (
            <div>
              <label>Enter your name:</label>
            </div>
          ) : selected === 'unsatisfied' ? (
            <Box width={300}>
              <Slider
                min={0}
                max={20}
                step={1}
                defaultValue={amount}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleSliderChange}
              />
              <label>How unsatisfied are you?</label>

              <div>
                {/* <input
                type="range"
                id="unsatisfiedRange"
                name="unsatisfiedRange"
                min="0"
                max="20"
                value={amount}
                onChange={handleSliderChange}
                step="1"
              ></input> */}
              </div>
            </Box>
          ) : selected === 'indifferent' ? (
            <div
              onChange={handleRadioGroupChange}
              style={{display: 'flex', flexDirection: 'column'}}
            >
              {/* https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs */}
              <p>Please select your preferred option:</p>
              <input type="radio" name="preferred" value="now" /> I want to
              retry now
              <input type="radio" name="preferred" value="later" /> I want to
              retry later
            </div>
          ) : (
            ''
          )}
        </FormControl>
      </Box>
    </Container>
  )
}

export default PatientSatisfaction
