import React, { useState } from 'react';
import './App.css';

function App() {
 //  const [username, setUsername] = useState('');
 //  const [password, setPassword] = useState('');

 const [formState, setFormState] = useState({
  username: '',
  password: '',
 });
 const submitHandler = e => {
  e.preventDefault();
  //   console.log(username);
  //   console.log(password);
  // send data to server
  // chande data
  // go to a new page
  console.log(formState);
 };

 const changeHandler = e => {
  console.log(e.target.name);
  setFormState({ ...formState, [e.target.name]: e.target.value });
 };

 //  console.log(username);
 return (
  <div className="App">
   <form onSubmit={submitHandler}>
    {/* <form onSubmit={(e) => {}}> */}
    <label>
     Username
     <input
      type="text"
      name="username"
      value={formState.username} // now react controls data not a DOM
      onChange={changeHandler}
      placeholder="Enter your username"
     />
    </label>
    <label>
     Password
     <input
      type="password"
      name="password"
      value={formState.password}
      onChange={changeHandler}
      placeholder="Enter your password"
     />
    </label>
    <button>Submit</button>
    {/* <button type="button">Submit</button> // <-- doesn't submit */}
   </form>
  </div>
  //   <div className="App">
  //    <form onSubmit={submitHandler}>
  //     {/* <form onSubmit={(e) => {}}> */}
  //     <label>
  //      Username
  //      <input
  //       type="text"
  //       name="username"
  //       onChange={e => {
  //        setFormState({ ...formState, username: e.target.value });
  //       }}
  //       placeholder="Enter your username"
  //      />
  //      {/* <input
  //       type="text"
  //       onChange={e => {
  //        setUsername(e.target.value);
  //       }}
  //       placeholder="Enter your username"
  //      /> */}
  //     </label>
  //     <label>
  //      Password
  //      <input
  //       type="password"
  //       name="password"
  //       onChange={e => {
  //        setFormState({ ...formState, password: e.target.value });
  //       }}
  //       placeholder="Enter your password"
  //      />
  //      {/* <input
  //       type="password"
  //       onChange={e => {
  //        setPassword(e.target.value);
  //       }}
  //       placeholder="Enter your password"
  //      /> */}
  //     </label>
  //     <button>Submit</button>
  //     {/* <button type="button">Submit</button> // <-- doesn't submit */}
  //    </form>
  //    {/* <form action="">
  //     <label>
  //      Username
  //      <input />
  //     </label>
  //     <input type="button" value="button" />
  //     <input type="text" placeholder="Enter your username" />
  //     <input type="date" />
  //     <input type="file" />
  //     <input type="password" />
  //     <input type="radio" value="D" />
  //     <input type="checkbox" />
  //    </form> */}
  //   </div>
 );
}

export default App;
