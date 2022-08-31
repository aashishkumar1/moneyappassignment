import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.coupon}>
      <span>Use code:<b>MONEYYAPP</b> to get $10 discount</span>
    </div>
    <nav className={styles.nav}>
      <div><b>E-commerce App</b></div>
      <NavLink className={styles.link} to='/'>Products</NavLink>
      <NavLink className={styles.link} to='/cart'>Cart</NavLink>
    </nav>
    <hr />
    </>
  )
}

export default Navbar