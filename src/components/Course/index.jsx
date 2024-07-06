import React from 'react'
import C1 from '../../images/course/course_01.jpg'
// import C2 from '../../images/course/course_02.jpg'
// import C3 from '../../images/course/course_03.jpg'
import Staff from '../Staff'
import Test from '../Test'

const Course = () => {
  return (
<section id="course">
    <div className="layout-course">
      <h2 className="section-title section-title__modifier-primary">Course<span className="section-title__ja">カリキュラム</span></h2>
      <p className="text-center section-paragraph">未経験からでもスタートができるよう、カリキュラムは多くの専門家や<br />現役チーズ職人のアドバイスのもと、作られました。</p>
    </div>
    <div className="bg-gray">
      <section id="course01">
        <div className="course-box">
          <div className="course-box__info">
            <div className="course-box__inner">
              <h3 className="course-box__title">本格的な農園を使った実地研修</h3>
              <p className="course-box__paragraph">チーズアカデミーでは、本格的な農園を使った実地研修を行うことができます。プロとして活躍するチーズ職人も使用するような、広大で環境も整った農園を余すところなく使い、卒業時には本格的なチーズを自分の力で作れる実践力の養成を目指します。</p>
            </div>
          </div>
          <div className="course-box__img">
            <img src={C1} alt="チーズアカデミーで使用されている農園" />
          </div>
        </div>
      </section>
    <div />
    
		{/* <!--staff	--> */}
		<Staff />

		{/* <!--test	--> */}
		<Test />

      </div>
    </section>
  )
}

export default Course
