import React from "react"
import styles from "./styles.module.scss"
import logoImg from "../../assets/img/navbar/logo.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <img src={logoImg} alt="logo" />
      </div>
      <div className={styles.rightSide}>
        <Link to="/">Home</Link>
        <Link to="/">Menu</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
