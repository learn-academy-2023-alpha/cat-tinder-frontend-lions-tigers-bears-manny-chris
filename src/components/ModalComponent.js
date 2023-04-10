import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter,Button } from "reactstrap"


const ModalComponent = ({beastName, showModal, setShowModal,setConfirmDelete}) => {
  const toggle = () => {
    setShowModal(!showModal)
  }
const cancel = () => {
    setConfirmDelete(false)
    toggle()
}
const confirm = () => {
  setConfirmDelete(true)
  toggle()
}


  return (<>
    <Modal className="modalContent" isOpen={true} toggle={toggle} backdrop="static" centered>
      <ModalHeader className="modalHeader" toggle={toggle}>
        {`Warning!!!`}
      </ModalHeader>
      <ModalBody className="modalBody">
      Are you sure you would like to delete {beastName}?
      </ModalBody>
      {/* <ModalFooter>
        <Button onClick={confirm}>Confirm</Button>
        <Button onClick={cancel}>Cancel</Button>
      </ModalFooter> */}
    </Modal>

    </>)
}

export default ModalComponent