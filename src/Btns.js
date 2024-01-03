import {Wbtn, Bbtn } from './styled/Commonui'

const Btns = () => {
  
  const bodybg = {
    backgroundColor : "black",
    padding : "5rem",
    textAlign : "center"
  }

  return (
    <div style={bodybg}>
      <Wbtn>하얀버튼</Wbtn>
      <Bbtn>검정버튼</Bbtn>
    </div>
  )
}

export default Btns