import React from 'react'
import {Container, TextField, Button} from '@mui/material'

const CustomerInfo = ({formData, setFormData, navigation}) => {
  console.log()
  const {name} = formData
  console.log(name)

  return (
    <Container maxWidth="xs">
      <h3>Customer Info</h3>
      <TextField
        label="Your Name"
        name="name"
        value={name}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      ></TextField>
      <Button
        onClick={() => navigation.next()}
        variant="contained"
        fullWidth
        color="primary"
        style={{marginTop: '1rem'}}
      >
        Next
      </Button>
    </Container>
  )
}

export default CustomerInfo
