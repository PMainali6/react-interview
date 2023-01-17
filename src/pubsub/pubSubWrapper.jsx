import React from 'react';
import Greeter from './Greeter';
import Login from './Login';
import Dashboard from './dashboard';

export default function PubSub() {
    return(
        <>
            <Greeter />
            <Login />
            <Dashboard />
        </>
    )
}