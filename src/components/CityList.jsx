import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'

const CityList = ({cities, isLoading}) => {
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message txt={"Add Your First City By Clicking On A City On The Map"} />
  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem key={city.id} city={city} /> )}
    </ul>
  )
}


export default CityList