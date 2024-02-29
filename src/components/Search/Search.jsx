import React from 'react';
import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({setFilterValue, filterValue}) => {
  return (
    <div className={styles.inputWrapper}>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      <input 
        type="text" 
        className={styles.input}
        value={filterValue}
        placeholder='Search your trip'
        onChange={(event) => {
        setFilterValue(event.target.value)
      }}
      />
    </div>
  )
}

export default Search