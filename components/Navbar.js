import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <>
     <nav className={styles.navbar}>
        <img src='../ranaverse.jpg' alt='logo' className={styles.logo}/>
        <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/home">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/">Index</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/ranaverse">Ranaverse</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/services">Services</Link>
        </li>
      </ul>
 
    </nav>

    </>
  )
}

export default Navbar