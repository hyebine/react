import { Wbtn, Bbtn, BgBanner, WildBanner, Parentwbtn } from './styled/Commonui'
import styled from 'styled-components'


const Outcom = styled(BgBanner)`
background-color: red;
color: white;
font-size: 50px;
`

const Btns = () => {

  const bodybg = {
    backgroundColor: "black",
    padding: "5rem",
    textAlign: "center"
  }

  return (
    <div style={bodybg}>
      <BgBanner bgcolor="gray">
        <h2>큰글씨</h2>
        <p>작은글씨</p>
      </BgBanner>
      <Outcom>평범한 컴포넌트를 스타일 컴포넌트가 가져옴</Outcom>
      <WildBanner>스타일컴포넌트그대로</WildBanner>
      <Parentwbtn>내안에 Wbtn 클래스가 있다.</Parentwbtn>
      <Wbtn>하얀버튼</Wbtn>
      <Bbtn>검정버튼</Bbtn>
    </div>
  )
}

export default Btns