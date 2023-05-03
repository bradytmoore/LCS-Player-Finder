import React from 'react';
import './App.css';
import Data from './data.json';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Home() {
    return(
        
        <div className="App">
            <Nav />
            <h1>Teams:</h1>
            {/* <ul className="teamplist">
            <img id="teampic" src={Data[0].teampic} />
            <br />
            <img id="teampic" src={Data[1].teampic} />
            <br />
            <img id="teampic" src={Data[2].teampic} />
            <br />
            <img id="teampic" src={Data[3].teampic} />
            </ul> */}

            <h3 id ="backh">Select A Team To View Players!</h3>
            <ul>
                {Data.map(item => (
                    
                    <Link to={`/firststep/${item.id}`}>
                        <button>{item.name}</button>
                    </Link>
                    
                ))
                }
            </ul>
            
            <br/>
        </div>
        
        
    );
}

export default Home;