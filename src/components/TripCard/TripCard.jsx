import React from 'react';
import styles from './tripcard.module.css';
import { formatDate } from '../../utils/formatDate';

const TripCard = ({trip, setSelectedTrip, selectedTripId}) => {
  return (
    <div 
      className={styles.card} 
      onClick={() => setSelectedTrip(trip)}>
      <img src={`/cities/${trip.city}.jpg`} alt={`${trip.city}`} className={styles.cardImage} />
      <div className={`${styles.cardInfo} ${selectedTripId === trip.id ? styles.activeCard : styles.notActiveCard}`}>
        <h2 className={styles.cardName}>{trip.city}</h2>
        <p className={styles.cardDate}>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</p>
      </div>
    </div>
  )
}

export default TripCard