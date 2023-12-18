import { useState } from 'react';
import navijson from './data/gnb.json'


function App() {
  const [tabvar, settab] = useState(0);
  const myfun = (v) => {
    alert(v)
  }

  return (
    <div>
      <ul className='d-flex'>
        {
          navijson.map((v, idx) => {
            return (
              <>
                <li onClick={function () { settab(idx); }}>{v.hbname}</li>
                {tabvar === idx && <div>
                  {idx}
                </div>
                }
              </>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
