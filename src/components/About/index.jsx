// import React from 'react'
// import aboutImg from '../images/about/about_img.jpg'
import aboutImg from '../../images/about/about_img.jpg'
import styles from './style.module.scss'

const About = () => {
  return (
    <section id="about">
      <div className={styles['layout-about']}>
        <h2 className={`${styles['section-title']} ${styles['section-title__yellow']} `}>About<span className={styles['section-title__ja']} >チーズアカデミーについて</span></h2>
        <div className={styles['section-sentence']}>
          <p className={styles['section-paragraph']}>チーズアカデミーは、チーズ職人養成学校です。</p>
          <p className={styles['section-paragraph']}>チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
          <br />そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。</p>
          <p className={styles['section-paragraph']}>そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。</p>
          <p className={styles['section-paragraph']}>卒業後、チーズ自給自足のバックアップはもちろんのこと、<br />チーズ職人への就職・転職もサポートします。</p>
        </div>
      </div>
      <div>
        <img src={aboutImg} alt="チーズアカデミーの学校の様々な様子" />
      </div>
    </section>
  )
}

export default About
