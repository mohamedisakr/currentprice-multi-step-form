import React from 'react'
import {Container} from '@mui/material'

const Confirmation = ({formData}) => (
  <Container maxWidth="xs">
    <div className="form">
      <h2>Survay Submitted</h2>
      <p>Thank you for the information provided!</p>
      <pre className="pre w3-container w3-light-grey">
        {/* {JSON.stringify(formData, null, 4)} */}
        {console.log(JSON.stringify(formData, null, 4))}
      </pre>
    </div>
  </Container>
)

export default Confirmation
