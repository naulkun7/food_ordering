import React from "react"
import styles from "./styles.module.scss"
import logoImg from "../../assets/img/navbar/logo.png"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbar__main}>
          <div className={styles.navbar__logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={styles.navbar__menu}>
            <Link className={styles.navbar__menu__item} to="/">
              Home
            </Link>
            <Link className={styles.navbar__menu__item} to="/">
              Menu
            </Link>
            <Link className={styles.navbar__menu__item} to="/">
              About
            </Link>
            <Link className={styles.navbar__menu__item} to="/">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
