import React from "react";
// import { Link } from "react-router-dom";
import CSS from './Certification.module.css'
const Certification=()=>{
    return(
        <div>
            <h1 id={CSS.achieve}>My Achievements</h1>
            <img id={CSS.certify}src="./public/image2.jpeg"/>
            <img className={CSS.pictures} src="./public/image4.jpeg"/>
        </div>
    );
}
export default Certification;