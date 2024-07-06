import React from 'react'
import C2 from '../../images/course/course_02.jpg'


const Staff = () => {
  return (
<section id="course02">
        <div className="course-box course-box__reverse">
		<div className="course-box__info course-box__info-reverse">
			<div className="course-box__inner">
				<h3 className="course-box__title">必要な知識もしっかりと取得</h3>
				<p className="course-box__paragraph">チーズ作りには、しっかりとした食に関する知識が
		欠かせません。チーズアカデミーでは、一流講師陣による、
		チーズ作りに必要ないろはを余すところなく学べます。
		チーズそのものでなく、栄養学全般を学ぶことも
		可能ですので、チーズ以外への展開も夢ではないでしょう。</p>
			</div>
		</div>
        <p className="course-box__img">
          <img src={C2} alt="チーズアカデミーの講師陣" />
        </p>
	</div>
</section>
  )
}

export default Staff
