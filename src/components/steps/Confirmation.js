import React from 'react'

const Confirmation = ({formData}) => (
  <div className="form">
    <h2>Survay Submitted</h2>
    <p>
      Your confirmation number is
      <br />
      <b>RCW-02-898-776</b>
    </p>
    <p>Thank you for the information provided!</p>
    <pre className="pre w3-container w3-light-grey">
      {JSON.stringify(formData, null, 4)}
      {console.log(JSON.stringify(formData, null, 4))}
    </pre>
  </div>
)

export default Confirmation
