import React from "react";
import './App.css';
import Nav from './Nav'


function About() {
    return(
        <div className="AboutPage">
            <Nav />
            <br/>
            <h1>App Purpose:</h1>
            <br/>
            <p id ="aboutp">This app will help you be in the know for all the current North American League of Legends teams rosters and some details about them. 
                            Currently we will tell you each players in-game-name, their role, and their favorite champion, their nationality as well as a picture of them!</p>
            <br/>
            

        </div>
        
    );
    
}

export default About;