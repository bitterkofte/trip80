import { NavLink, useLocation } from 'react-router-dom'
import styles from './AppNav.module.css'
import { useState } from 'react'

const AppNav = () => {
  const loc = useLocation();
  const [toggle, setToggle] = useState(loc.pathname ===  "/app/countries" ? false : true)
  return (
    <nav className={styles.nav}>
      <ul>
        <div className={`${styles.bg} ${toggle ? styles.left : styles.right}`}></div>
        <li>
          <NavLink className={styles.cities} onClick={() => setToggle(true)} to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink className={styles.countries} onClick={() => setToggle(false)} to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default AppNav