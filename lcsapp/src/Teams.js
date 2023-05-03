import React from "react";
import './App.css';
import Data from './data.json';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './Nav'

function Teams() {
    const params = useParams();


    return(

        <div className="AppTeam">
            <Nav />
            <h1>Team Spotlight:</h1>
            
            <div className="thievesdiv">
                <h2>100 Thieves</h2>
                <img id="teampic" src={Data[0].teampic} />
                <h3>Founded:</h3>
                <p>2017</p>
                <h3>CEO:</h3>
                <p>Matthew "Nadeshot" Haag</p>
                
            </div>

           
        <div className="clouddiv">
            <h2>Cloud9</h2>
            <img id="teampic" src={Data[1].teampic} />
            <h3>Founded:</h3>
            <p>2013</p>
            <h3>CEO:</h3>
            <p>Jack Etienne</p>
            
        </div>
            
        <div className="liquiddiv">
            <h2>Team Liquid</h2>
            <img id="teampic" src={Data[2].teampic} />
            <h3>Founded:</h3>
            <p>2000</p>
            <h3>CEO:</h3>
            <p>Victor "Nazgull" Goossens</p>
            
        </div>
            
        <div className="evildiv">
            <h2>Evil Geniuses</h2>
            <img id="teampic" src={Data[3].teampic} />
            <h3>Founded:</h3>
            <p>1999</p>
            <h3>CEO:</h3>
            <p>Nicole LaPointe Jameson</p>
            
        </div>

        
            <Link to= '/home'>
            <button>Back</button>
            </Link>
        

            

        </div>
    );
}

export default Teams;