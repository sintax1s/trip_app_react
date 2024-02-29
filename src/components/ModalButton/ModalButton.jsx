import React from 'react';
import styles from './modalbutton.module.css';

const ModalButton = ({openModal}) => {
  return (
    <div onClick={openModal} className={styles.button}>
      <p className={styles.plus}>+</p>
      <p className={styles.addTrip}>Add Trip</p>
    </div>
  )
}

export default ModalButton;