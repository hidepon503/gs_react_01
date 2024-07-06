
import '../../../css/reset.css'
// import styles from './style.module.scss'
import styled from 'styled-components'
import heroImg from '../../../images/header/hero_img.jpg'

export default function StyledComponent() {
  const Div = styled.div`
  position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  `;

  const H1 = styled.h1`
  	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	color: #fff;
	font-size: 4.8rem;
	line-height: 1;
	text-align: center;
  `;

  const Span = styled.span`
  		display: block;
	margin: 40px 0 0;
	font-size: 0.67em;
	font-weight: normal;
  `


  // const MainVisual = () => {
    return (
      <Div>
        <H1>セカイを変えるチーズを作ろう
          <Span>チーズ職人養成学校「チーズアカデミーTOKYO」</Span>
        </H1>
        <img src={heroImg} alt="チーズの画像" />
      </Div>
    )
  // }
}
// export default MainVisual
