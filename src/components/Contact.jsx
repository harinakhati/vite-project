// import React from "react";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import CSS from './Contact.module.css'
const Contact=()=>{
    const[feedback,setName]=useState(" ");
return(
 <div>
    <h1>Contact Here</h1>
    <Link id="header" to="https://github.com/harinakhati">Github </Link><br />
    <Link to="https://www.linkedin.com/feed/">LinkedIn</Link><br />
    <h2>Email:harinakhati5@gmail.com</h2>
    <h2>Phone no.:<br/>980000000</h2>
   <h2> Address: <br />Kathmandu,Nepal</h2>
    <h2 >Feedback:{feedback}</h2>
        <button onClick={()=>setName('Good')}>Good</button>
        <button onClick={()=>setName('')}>Reset</button>
        <button onClick={()=>setName('Better')}>Better </button>
        <button onClick={()=>setName('Best')}>Best</button>
 </div>
);
}
export default Contact;