import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/TripList/TripList';
import Modal from './components/Modal/Modal';
import WeekList from './components/WeekList/WeekList';
import WeatherScreen from './components/WeatherScreen/WeatherScreen';
import Search from './components/Search/Search';
import { handleSortAndFilter } from './utils/handleSortAndFilter';
import SortButton from './components/SortButton/SortButton';

const firstTrip = {
  id: 1,
  city: 'Berlin',
  startDate: '2024-03-03',
  endDate: '2024-03-12',
}

function App() {
  const [trips, setTrips] = useState([firstTrip]);
  const [selectedTrip, setSelectedTrip] = useState(firstTrip);
  const [sortOrder, setSortOrder] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const tripsFromLocalStorage = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips([firstTrip, ...tripsFromLocalStorage]);
  }, []);

  const sortedTrips = handleSortAndFilter(sortOrder, trips, filterValue);

  return (
    <div className='container'>
      <div className='leftSide'>
        <h1 className='title'>Weather <span className='bold'>Forecast</span></h1>
        <div className='search-container'>
          <Search setFilterValue={setFilterValue}/>
          <SortButton setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
        
        <div className='list-container'>
          <TripList trips={sortedTrips} setSelectedTrip={setSelectedTrip} selectedTripId={selectedTrip.id}/>
          <Modal setTrips={setTrips}/>
        </div>

        <div className='week-container'>
          <h2 className='week-title'>Week</h2>
          <WeekList selectedTrip={selectedTrip}/>
        </div>
      </div>
        <WeatherScreen selectedTrip={selectedTrip}/>
    </div>
  );
}

export default App;
