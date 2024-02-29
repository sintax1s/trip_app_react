import React, { useState } from 'react'
import ModalButton from '../ModalButton/ModalButton'
import ModalWindow from '../ModalWindow/ModalWindow';

const Modal = ({setTrips}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTrip, setNewTrip] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <ModalButton openModal={openModal}/>
      {isModalOpen && (
        <ModalWindow 
          closeModal={closeModal} 
          setNewTrip={setNewTrip} 
          newTrip={newTrip}
          setTrips={setTrips}
        />
      )}
    </div>
  )
}

export default Modal