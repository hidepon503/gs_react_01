// import React from 'react'
// import heroImg from '../images/header/hero_img.jpg'
import MainVisual from './MainVisual'
// import '../../css/reset.css'
import styles from './style.module.scss'
// import headerLogo from '../../images/header/header_logo.png'
import Navigation from './Navigation'



const Header = () => {
  return (
		<header className={styles.header}>
			< MainVisual />
			<Navigation />
		</header>
  )
}

export default Header
