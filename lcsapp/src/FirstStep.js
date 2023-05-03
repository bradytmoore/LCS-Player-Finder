import React, { useState } from "react";
import './App.css';
import Data from './data.json';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './Nav'


function FirstStep() {
    const params = useParams();
    // const [data, setData] = useState([]);

    // function handleClick(num) {
    //     setData(Data[params.id].teams[num]);
    //     console.log(Data[params.id].teams[num]);
    // }


    return (
        <div className="App">
            <Nav />
            <h3 id ="backh">Select a player to see their info!</h3>
            <h1>{Data[params.id].name}</h1>
            <img id="teampicfs" src={Data[params.id].teampic} />
            <ul>
                
                <Link to={`/laststep/${params.id}/${0}`}>
                    <button>{Data[params.id].teams[0].name}</button>
                </Link>
                
                
                <Link to={`/laststep/${params.id}/${1}`}>
                    <button>{Data[params.id].teams[1].name}</button>
                </Link>
                
                
                <Link to={`/laststep/${params.id}/${2}`}>
                    <button>{Data[params.id].teams[2].name}</button>
                </Link>
                
                
                <Link to={`/laststep/${params.id}/${3}`}>
                    <button>{Data[params.id].teams[3].name}</button>
                </Link>
                
                
                <Link to={`/laststep/${params.id}/${4}`}>
                    <button>{Data[params.id].teams[4].name}</button>
                </Link>
                
            </ul>
            <br/>
        </div>
    );
}

export default FirstStep;