import React from "react";
import CSS from './Home.module.css'
const Home=()=>{
 return(
    <div>
        <img  className={CSS.header} src="image1.jpeg"/>
        <h1  id="temp" style={{color:"black"}}>Harina Khati</h1>
        <p className={CSS.title} >Hello, This is Harina Khati, currently studying BSc. CSIT in Padmakanya Multiple Campus.<br/>
            I am currently learning web development using React.js. This is my first project designed using<br/>
            React.js with Html, CSS and JS.
        </p>
    </div>
 );
}
export default Home;