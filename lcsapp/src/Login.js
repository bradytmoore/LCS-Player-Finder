import React, { useEffect, useState } from "react";
import './App.css';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import {getAuth, EmailAuthProvider} from 'firebase/auth';
import { auth } from './firebase-config';
import { Link } from 'react-router-dom';



import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Login(){
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");

const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

useEffect(() => {
onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
});

},[])

const [user, setUser] = useState({});

const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    
    console.log(user);
    } catch (error){
        console.log(error.message);
    }
};

const login = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
        } catch (error){
            console.log(error.message);
        }

};

const logout = async () => {
    await signOut(auth);
};

return(
    <div className="App">
        <div className="userlogin">
          <h3>Register User</h3>
          <h5>(Password Must Be 6 Characters Long)</h5>
          <input placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value);}} />
          <input placeholder="Password..." onChange={(event) => {setRegisterPassword(event.target.value);}}/>
          <button onClick={register}> Create User </button>
          
        </div>

        <div className="userlogin">
          <h3>Login</h3>
          <input placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value);}}/>
          <input placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value);}}/>
    
        <button onClick={login}> Login </button>
          
        </div>

        <h4> User Logged In: </h4>
        {user?.email}
        {user?<button><Link to ={`/home`}> LOGIN </Link></button>:""}
        
        <button onClick={logout}> Sign Out</button>
        
    </div>
);

}

export default Login;