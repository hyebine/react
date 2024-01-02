import React from 'react';
import "./contact.scss";
import "@fontsource/noto-sans-kr"


const Contact = () => {


  return (
    <div className='contact bg-light py-5'>
      <form action="#none" className='cominfo container'>
        <fieldset className='text-center'>필수 정보</fieldset>
        <ul className='row my-4'>
          <li className='col-12 mb-2'>
            <input type="text" className='bg-white border d-block w-100' name='company' placeholder='회사 이름(필수)' required />
          </li>

          <li className='col-6 mb-2'>
            <input type="text" className='bg-white border d-block w-100' name='name' placeholder='담당자 성함(필수)' required />

          </li>

          <li className='col-6 mb-2'>
            <input type="text" className='bg-white border d-block w-100' name='name' placeholder='직책(필수)' required />
          </li>

          <li className='col-6 mb-2'>
            <input type="number" className='bg-white border d-block w-100' name='number' placeholder='전화번호(필수)' required />
          </li>

          <li className='col-6 mb-2'>
            <input type="email" className='bg-white border d-block w-100' name='email' placeholder='이메일 주소(필수)' required />
          </li>

          <li className='col-12'>
            <strong className='d-block'>프로젝트 개요</strong>
            <textarea name="text" className='bg-white border d-block w-100' id="" cols="50" rows="10" placeholder='프로젝트와 관련된 기초 정보를 입력해 주세요.&#13;&#10;
            *만약 RFP가 있으시다면 아래 "파일 업로드"를 선택해 파일을 첨부하여 주십시오.'>
            </textarea>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Contact;
