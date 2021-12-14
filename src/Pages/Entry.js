import React from 'react'
import Partistl from '../components/Partistl'
import Signup from '../components/Signup'
import Logo from '../components/Logo'

import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from '../firebase-config';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

let userName = "login via google to see your name here";


function Entry() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const googleSignin = () =>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(authentication, provider)
        .then(re=>{
            console.log("is login");

            if(re.user.displayName.split(" ")[0]){

                userName = re.user.displayName;
                console.log(userName);
                console.log("works")
            }

            setTimeout((()=> setIsLoggedIn(true)),4000);
        })
        .catch(err=>console.log(err));
    }


    if (isLoggedIn) {
        return <Navigate to='/Robosapian' />
       }

    return (
        <div style={{height:"120vh",overflowY:"scroll"}}>
            <Partistl></Partistl>
            <h1 className='white ba1 mb2 ml3'>{
                `Glympse of Ai -by Eaishawarya Malviya`
            }</h1>
            <Logo></Logo>
            <Signup googleSignin= {googleSignin} ></Signup>            
        </div>
    )
}

export {Entry, userName}