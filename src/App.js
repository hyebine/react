import navijson from './data/gnb.json'


function App() {
  const myfun = (v) => {
    alert(v)
  }

  return (
    <div>
      <ul className='d-flex'>
        {
          navijson.map((v, idx) => {
            return (
              <li onClick={ function() {myfun(idx)} }>
                {v.hbname}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
