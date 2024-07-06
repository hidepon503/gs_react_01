// import React from 'react'
// import MainVisual from './MainVisual'

import headerLogo from '../../../images/header/header_logo.png'

import styles from './style.module.scss'

const Navigation = () => {
  return (
	<div className={styles['header-above']}>
		<div className={`${styles.wrapper} ${styles['header-inner']}`}>
      <p className={`${styles.logo} ${styles['logo-header']}`}>
        <a href="#">
          <img src={headerLogo} alt="Cheese Academy Tokyo" />
        </a>
      </p>
			<button className={`${styles.btn} ${styles['btn-mobileMenu']}`}>Menu</button>
					
			<nav className={styles['navOuter']}>
				<ul className={`${styles.nav} ${styles.clearfix}`}>
					<li className={styles['nav-item']}><a href="#about">About</a></li>
					<li className={styles['nav-item']}><a href="#course">Course</a></li>
					<li className={styles['nav-item']}><a href="#news">News</a></li>
					<li className={styles['nav-item']}><a href="#access">Access</a></li>
					<li className={styles['nav-item']}><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
  )
}

export default Navigation
