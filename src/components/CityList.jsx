import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'

const CityList = () => {
  const { cities, isLoading } = useCities();
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message txt={"Add Your First City By Clicking On A City On The Map"} />
  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem key={city.id} city={city} /> )}
    </ul>
  )
}


export default CityList