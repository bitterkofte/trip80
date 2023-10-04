import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message txt={"Add Your First Country By Clicking On A Country On The Map"} />
  const countries = cities.reduce((arr, trip) => {
    if(!arr.map(e => e.country).includes(trip.country))
      return [...arr, {country: trip.country, emoji: trip.emoji}];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map(country => <CountryItem key={country.country} country={country} /> )}
    </ul>
  )
}


export default CountryList