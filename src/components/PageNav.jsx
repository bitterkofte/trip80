import { NavLink } from "react-router-dom"

import Logo from './Logo'
import styles from './PageNav.module.css'

const PageNav = () => {
  return (
    <>
    <nav className={styles.nav} >
      <Logo />
      <ul>
        <li>
          <NavLink to={"/"} >Home</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"} >Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"} >Product</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={styles.loginlink} >Login</NavLink>
        </li>
      </ul>
    </nav>
    {/* <Outlet /> */}
    </>
  )
}
export default PageNav