import React from "react";
import './App.css';
import { Link, useParams } from 'react-router-dom';
import Data from './data.json';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import User from './User';








function Nav() {
    

    
    

    return (
        
        <nav>
            <div className="Header">
                <img id="lcshead" src={Data[0].teams[0].item.lcslogo}/>
                <h1>LCS Player Finder</h1>
                
                
            </div>
            
            <div className="faStuff">
                
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faAddressCard} />
                <FontAwesomeIcon icon={faPeopleGroup} />

                

            </div>


            
            <ul className="nav-links">
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/teams'>
                <button>Teams</button>
            </Link>
        


            </ul>

            <User />
            <Link to='/login'>
                <button>Account</button>
            </Link>

        </nav>
    )
        
}

export default Nav;