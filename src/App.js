import './App.css';
import styled from 'styled-components';
import Mycom from './Mycom';

const Buttoncom = styled.button`
background-color : red;
color : white; font-size : 50px;
border-radius: 50%;
display: block; width: 150px; height: 150px;
margin: 0 auto; border: 0;
`;


const Outputcom = styled(Mycom)`
padding: 30px;
`;

function App() {
  return (
    <div className="App">
      <Buttoncom>클릭</Buttoncom>
      <Mycom cls="red">내가 바로 children</Mycom>
      <Mycom cls="green">내용</Mycom>
      <Mycom cls="blue">100</Mycom>
      <Mycom cls="gray">2024</Mycom>
      <Outputcom>나는 손코딩으로 만들어진 컴포넌트에 클래스만 적용한거</Outputcom>
    </div>
  );
}

export default App;
