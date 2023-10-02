import Map from "../components/Map"
import SideBar from "../components/SideBar"
import styles from './AppPage.module.css'

const AppPage = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  )
}
export default AppPage