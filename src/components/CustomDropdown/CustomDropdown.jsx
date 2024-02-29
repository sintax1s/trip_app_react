import React from 'react';
import styles from './customdropdown.module.css';
import { listOfCities } from '../../utils/listOfCities';

const CustomDropdown = ({isError, setIsError, currentOption, setIsOpen, isOpen, setNewTrip, setCurrentOption}) => {
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown__button}
        onClick={() => {
          if (isError.select) {
            setIsError(prev => ({...prev, select: false}))
          }

          setIsOpen((x) => !x)
        }}
      >
        <span className={styles.dropdown__current}>{currentOption}</span>
        <img
          src={'/icons/Arrow.png'}
          className={`${styles.arrow} ${isOpen ? styles.arrow__top : styles.arrow__bottom}`}
          alt="Arrow"
        />
      </div>
      {isOpen && (
        <ul className={styles.dropdown__list}>
          {listOfCities.map((city) => (
            <li
              key={city.city}
              className={styles.dropdown__item}
              onClick={() => {
                setIsOpen(false);
                setNewTrip((prev) => ({...prev, city: city.city , id: city.id}))
                setCurrentOption(city.city)
            }}
            >
              <img src={`/cities/${city.city}.jpg`} alt={`${city.city}`} className={styles.dropdown__itemImage}/>
              <p>{city.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomDropdown