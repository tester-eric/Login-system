import React, { Component, useState } from 'react';
import Axios from 'axios'


function Login (){
  const [Regusername, setUsername] = useState("");
  const [Regpassword, setpassword] = useState("");

  const login= ()=>{
    Axios.post("http://localhost:3001/login", {
      username: Regusername,
      password: Regpassword,
  }).then((response) => {
      console.log(response);
  });
  }
    return (

      <div className="login">
        <h1>Login</h1>
        <label >Username</label>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label >Password</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      <button onClick={login}> Login </button>
      </div>
    );
  

}

export default Login;