import React from 'react';
import TripCard from '../TripCard/TripCard';
import styles from './triplist.module.css';

const TripList = ({trips, setSelectedTrip, selectedTripId}) => {
  return (
    <div className={styles.list}>
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}          
          setSelectedTrip={setSelectedTrip}
          selectedTripId={selectedTripId}
        />
      ))}
    </div>
  )
}

export default TripList