import React from 'react';
import {publish} from './pubsubCustom';

export default function Login() {
    function handleLogin() {
        
        // do complicated login rituals
        console.log("login called")
        publish("name", "Mr. Orange")

        publish("age", 30);
        publish("prof", "FEE");
    }


    return(
       <button onClick={handleLogin}>Click me</button>
    )
}