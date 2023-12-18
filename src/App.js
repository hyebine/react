import { useState } from 'react';
import navijson from './data/gnb.json';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [tabvar, settab] = useState(0);

  return (

    <div className='wrap'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Link to="/kr">한국어</Link>
          <Link to="/en">영어</Link>

          <div className='text-white'>
          <Routes>
            <Route path='/kr' element={<>관리자</>}></Route>
            <Route path='/en' element={<>admin</>}></Route>
          </Routes>
          </div>

        </Container>
      </Navbar>

      <div id='tab'>
        <ul className='d-flex'>
          {
            navijson.map((v, idx) => {
              return (
                <li onClick={function () { settab(idx); }}>{v.hbname}</li>
              )
            })
          }
        </ul>
        <div className='border py-5 bg-dark text-white'>
          {
            navijson[tabvar] && <p>
              <img src={navijson[tabvar].src} alt={navijson[tabvar].alt} />
              <strong>{navijson[tabvar].hbname}</strong>
            </p>
          }
        </div>
      </div>

    </div>

  );
}

export default App;
