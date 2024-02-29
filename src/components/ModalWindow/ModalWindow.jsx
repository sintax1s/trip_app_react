import React, { useState } from 'react';
import styles from './modalwindow.module.css';
import CustomDropdown from '../CustomDropdown/CustomDropdown';


const ModalWindow = ({closeModal, setNewTrip, newTrip, setTrips}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState('Please select a city');
  const [isError, setIsError] = useState({
    select: false,
    startDate: false,
    endDate: '',
  })

  function handleSave() {
    if (currentOption !== 'Please select a city' && newTrip.startDate && newTrip.endDate) {
      if (newTrip.endDate >= newTrip.startDate) { 
        setTrips(prev => [...prev, newTrip]);

        const tripsFromLocalStorage = JSON.parse(localStorage.getItem('trips')) || [];
        localStorage.setItem('trips', JSON.stringify([...tripsFromLocalStorage, newTrip]));
        handleClose();
      } else {
        setIsError(prev => ({ ...prev, endDate: 'End date, cannot be earlier than start date' })); 
      }
    } else {
      if (currentOption === 'Please select a city') {
        setIsError(prev => ({ ...prev, select: true }));
      }
  
      if (!newTrip.startDate) {
        setIsError(prev => ({ ...prev, startDate: true }));
      }
  
      if (!newTrip.endDate) {
        setIsError(prev => ({ ...prev, endDate: 'You have not selected a start date, this field is required' }));
      }
    }
  }

  function handleClose() {
    closeModal();
    setNewTrip({});
  }

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);
  const maxDateISOString = maxDate.toISOString().split('T')[0];

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Create Trip</h2><span onClick={handleClose} ><img src="/icons/close.png" alt="Close" className={styles.modalClose}/></span>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <p><span className={styles.star}>*</span> City</p>
            <CustomDropdown 
              isError={isError} 
              setIsError={setIsError} 
              currentOption={currentOption}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setNewTrip={setNewTrip}
              setCurrentOption={setCurrentOption}
            />
            {isError.select && (<p className={styles.error}>You have not selected a city, this field is required</p>)}
        </div>
        <div className={styles.field}>
          <p><span className={styles.star}>*</span> Start date</p>
          <input 
            type="date" 
            min={today} 
            max={maxDateISOString} 
            className={styles.dateInput}
            onClick={() => {
              if (isError.startDate) {
                setIsError(prev => ({...prev, startDate: false}))
              }
            }}
            onChange={(event) => {
            setNewTrip(prev => ({...prev, startDate: event.target.value}));
          }}/>
          {isError.startDate && (<p className={styles.error}>You have not selected a start date, this field is required</p>)}
        </div>
        <div className={styles.field}>
          <p><span className={styles.star}>*</span> End Date</p>
          <input 
            type="date" 
            className={styles.dateInput} 
            min={newTrip.startDate || today} 
            max={maxDateISOString}
            onClick={() => {
              if (isError.endDate) {
                setIsError(prev => ({...prev, endDate: false}))
              }
            }}
            onChange={(event) => setNewTrip(prev => ({...prev, endDate: event.target.value}))}
          />
          {isError.endDate && (<p className={styles.error}>{isError.endDate}</p>)}
        </div>        
      </div>
      <div className={styles.buttons}>
        <button 
          className={styles.cancel}
          onClick={handleClose}
        >
          Cancel
        </button>
        <button 
          className={styles.save}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      </div>
    </div>
  )
}

export default ModalWindow;