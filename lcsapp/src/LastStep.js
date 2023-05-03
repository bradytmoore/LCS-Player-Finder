import React from "react";
import './App.css';
import Data from './data.json';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav'


function LastStep() {

    const params = useParams();
    console.log(params);

    return (
        <div className="App">
            <Nav />
        <h1>{Data[params.id].name}</h1>

            
                
            <h1>{Data[params.id].teams[params.name]}</h1>
            <h2>{Data[params.id].teams[params.num].item.text}</h2>
            <img src={Data[params.id].teams[params.num].item.image} />

            
            <br/>
            <div className="rolediv">
                <h2>Role:</h2>
                <h3>{Data[params.id].teams[params.num].item.role}</h3>
            </div>


            <div className="favdiv">
                <h2>Favorite Champion:</h2>  
                <h3>{Data[params.id].teams[params.num].item.favchamp}</h3>
            </div>


            <div className="natdiv">
            <h2>POB:</h2>
            <h3>{Data[params.id].teams[params.num].item.nat}</h3>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 id ="backh">Press the "Home" button to start over or click back!</h3>
            <Link to= '/home'>
            <button>Back</button>
            </Link>

            
        </div>
    );
}

export default LastStep;