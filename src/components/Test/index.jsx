import React from 'react'
import C3 from '../../images/course/course_03.jpg'

const Test = () => {
  return (
<section id="course03">
	<div className="course-box">
		<div className="course-box__info">
			<div className="course-box__inner">
				<h3 className="course-box__title">卒業制作はティスティング審査あり</h3>
				<p className="course-box__paragraph">チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。
		卒業制作として、チーズ作りを実際に行います。卒業後、
		一般参加によるティスティング審査があるため、作り手の
		目線だけでなく、消費者の目線から、卒業制作作品としての
		チーズを、しっかりと評価いただくことができます。</p>
				</div>
			</div>
        <p className="course-box__img">
          <img src={C3} alt="チーズアカデミーでは" />
        </p>
	</div>
</section>
  )
}

export default Test
