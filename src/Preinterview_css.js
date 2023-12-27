import React, { useEffect } from "react";
import "./interview.css";

const Preinterview = () => {
    let shownum = 0;

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

    useEffect(() => {
        document.querySelectorAll("#faq li")[0].classList ="act";

        setInterval(()=>{
            shownum++;
            shownum %= precont.length;
            document.querySelectorAll("#faq li").forEach((tag, num)=>{
                if(num == shownum){
                    tag.classList = "act"
                }else{
                    tag.classList = ""
                }
            })
        }, 2000)
    }, [])

    return (
        <section id="faq">
            <h2>면접전에 봐주세요.</h2>
            <ul>
                {
                    precont.map((e, i) => {
                        return (
                            <li key={i}>
                                <h3>{e.h3}</h3>

                                <div>
                                {
                                    e.div.split('/').map((v, ii) =>
                                        <React.Fragment key={ii}>
                                            {v}
                                            <br></br>
                                        </React.Fragment>
                                    )
                                }
                            </div>


                            </li>

            );
                    })
                }
        </ul>
        </section>
    )
}

export default Preinterview;