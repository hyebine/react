
import React, {useRef} from 'react';
import './App.css';

function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="form_member">
      <form action='#none'>
        <h2>User Login</h2>
        <ul>
          <li>
            <label htmlFor='email'>Email</label><br />
            <input type="text" ref={emailRef} />
          </li>
          <li>
            <label htmlFor='passworld'>Password</label><br />
            <input type="password" ref={passwordRef} />
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
