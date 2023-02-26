import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";


function about() {
  return (
    <>
      <div className={styles.maindivabout}>
        <Navbar />
        <br />
      </div>

      <div className={styles.divabout}></div>
      <div className={styles.ranaverse}>
        <h1 className={styles.ranaversetext}>About Ranaverse</h1>

        <div className={styles.ranaversestar}></div>
        <div className={styles.ranaversestar2}></div>
        <div className={styles.ranaversestar3}></div>
        <div className={styles.ranaversestar4}></div>
        <div className={styles.ranaversestar5}></div>
        <div className={styles.ranaversestar6}></div>
      </div>

      <div className={styles.ranaversestar7}></div>
      <div className={styles.ranaversestar8}></div>
      <div className={styles.ranaversestar9}></div>
      <div className={styles.ranaversestar10}></div>
      <div className={styles.ranaversestar11}></div>

          <div className={styles.footer1}>
        <footer className={styles.footerclass}>&copyright 2020</footer>
      </div>

      <div className={styles.ranaverse2}>
        <div className={styles.ranaverse2star}></div>
        <div className={styles.ranaverse2star2}></div>
        <div className={styles.ranaverse2star3}></div>
        <div className={styles.ranaverse2star4}></div>
        <div className={styles.ranaverse2star5}></div>
        <div className={styles.ranaverse2star6}></div>
      </div>

      <div className={styles.ranaverse2star7}></div>
      <div className={styles.ranaverse2star8}></div>
      <div className={styles.ranaverse2star9}></div>
      <div className={styles.ranaverse2star10}></div>
      <div className={styles.ranaverse2star11}></div>
    </>
  );
}

export default about;
