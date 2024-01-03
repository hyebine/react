import styled from 'styled-components';


export const Wbtn = styled.button`
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  display: inline-block;
  text-align: center;
  width: 100px;
  line-height: 2rem;
`;


export const Bbtn = styled.button`
  background-color: white;
  color: black;
  border: 1px solid #000;
  border-radius: 30px;
  display: inline-block;
  text-align: center;
  width: 100px;
  line-height: 2rem;
`;

/*
스타일컴포넌트 생성
  1. 이름은 Wildbanner
  2. 태그는 div로 출력
  3. 배경색이 검정, 글자 하얀색, 가운데 정렬, 위아래 여백은 200
*/
export const WildBanner = styled.div`
background-color: black;
color: white;
text-align: center;
padding: 200px 0;
`;

export const Parentwbtn = styled(Wbtn)`
border: 10px solid green;
`;


export const BgBanner = (props) => {
  return (
    <div className={props.className} style={{backgroundColor : props.bgcolor}}>
      {props.children}
    </div>
  )
}
