import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

function home() {
  return (
    <>
<div className={styles.homemaindiv}>

</div>
<Navbar />
<br /><br />


      <img src="https://i.imgur.com/uKQqsuA.png"
       alt="firstimage" 
       className={styles.firstimage}
       />

      <img src="https://i.imgur.com/HsUfuRU.png"
       alt="firstimage" 
       className={styles.firstimage}
       />

      <img src="https://i.imgur.com/qb6IW1f.png"
       alt="firstimage" 
       className={styles.firstimage}
       />

      <img src="https://i.imgur.com/Dm212HS.png"
       alt="firstimage" 
       className={styles.firstimage}
       />

      <img src="https://i.imgur.com/3Y1DLYC.png"
       alt="firstimage" 
       className={styles.firstimage}
       />
      <footer className={styles.footer}>
        Copyright <span className={styles.brand}>RANAVERSE</span>{' '}
        {2021}
      </footer>

    </>
  )
}

export default home;