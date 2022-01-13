import {useState} from 'react'
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material'

// {
//     name: '',
//     selectedOption: '',
//     amount: 0,
//     retryNow: '',
//     retryLater: '',
//   }
const PatientSatisfaction = ({formData, setFormData, navigation}) => {
  let {selectedOption} = formData
  const [selected, setSelected] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelected(event.target.value)
    selectedOption = selected
  }

  console.log(`selected : ${selected}`)
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
            // label="Please choose one option"
            onChange={handleChange}
          >
            <MenuItem value="satisfied">Satisfied</MenuItem>
            <MenuItem value="unsatisfied">Unsatisfied</MenuItem>
            <MenuItem value="indifferent">Indifferent</MenuItem>
          </Select>
          {}
        </FormControl>
      </Box>
    </Container>
  )
}

export default PatientSatisfaction
