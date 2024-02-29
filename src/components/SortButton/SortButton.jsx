import React from 'react';
import styles from './sortbutton.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


const SortButton = ({setSortOrder, sortOrder}) => {
  return (
    <button
      className={styles.sortButton}
      onClick={() => {
        setSortOrder('asc');
      
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      }

      if (sortOrder === 'desc') {
        setSortOrder('');
      }
      }}
    >
      Sort by Date
      {!sortOrder && (
        <FontAwesomeIcon icon={faSort} />
      )}

      {sortOrder === 'asc' && (
        <FontAwesomeIcon icon={faSortUp} />
      )}

      {sortOrder === 'desc' && (
        <FontAwesomeIcon icon={faSortDown} />
      )}
      
    </button>
  )
}

export default SortButton