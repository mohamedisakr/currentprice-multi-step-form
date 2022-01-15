import React from 'react'
// import MultiStepForm from './MultiStepForm'
import MultiStepForm from '../components/MultiStepForm'

const ModalScreen = ({handleClose}) => {
  const modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.08)',
  }

  return (
    <div
      className="modal show fade"
      style={modalStyle}
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Customer Review
            </h5>
          </div>
          <div className="modal-body">
            <MultiStepForm></MultiStepForm>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalScreen
