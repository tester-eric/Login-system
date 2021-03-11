import React, { Component, useState } from 'react';
import Axios from 'axios'

function Registration() {

    const [Regusername, setUsername] = useState("");
    const [Regpassword, setpassword] = useState("");
    Axios.defaults.withCredentials = true;
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: Regusername,
            password: Regpassword,
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <div className="registration">
            <h1>Registration</h1>
            <label >Username</label>
            <input class="input"
                type="text"
                placeholder="Username..."
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />

            <label>Password</label>
            <input
                placeholder="Password..."
                type="text"
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            />
          <button onClick={register}> Register </button>
        </div>
    );


}

export default Registration;

