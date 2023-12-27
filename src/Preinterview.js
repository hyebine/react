import React, { useRef, useState } from "react";


const Preinterview = () => {
    const faq = useRef(null);
    const [shownum, numupdate] = useState(null);

    const precont = [
        {
            h3: "비전공자로써 프론트앤드",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다."
        },
        {
            h3: "비전공자로써 프론트앤드",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다."
        },
        {
            h3: "비전공자로써 프론트앤드",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다."
        },
        {
            h3: "비전공자로써 프론트앤드",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다."
        },
    ]
    //문자.split('구분기호') -> array타입으로 전환 
    //(문자를 정렬데이터로 변환하는 아주 중요한 메서드)
    return (
        <section ref={faq}>

            <h2>면접전에 봐주세요.</h2>
            <ul>
                {
                    precont.map((e, i) => {
                        return (
                            <li key={i}>
                                {/* 클릭한 h3의 i값을 shownum으로 변경하겠다. */}

                                <h3 onClick={() => { numupdate(i) }}>{e.h3}</h3>

                                {shownum === i && <div>
                                    {
                                        e.div.split('/').map((v, ii) =>
                                            <React.Fragment key={ii}>
                                                {v}
                                                <br></br>
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                                }

                            </li>

                        );
                    })
                }
            </ul>
        </section>
    )
}

export default Preinterview;