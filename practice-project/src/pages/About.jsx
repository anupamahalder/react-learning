import React, { useState } from 'react';
import './About.css';
import Header from './Header';
const About = () => {
    const state ={
        name: "Anupama Halder",
        age: 23,
        prof:{
            prof1: "Web Developer",
            prof2: "Programmer",
            prof3: "React Developer"
        }
    }
    const [myProf, setMyProf] = useState("Web developer");
    const changeValue = ()=>{
        setMyProf("Full Stack Developer");
    }
    return (
        <div>
            <Header/>
            <h1 className='about'>Hello from About</h1>
            <p>My profession is {myProf}</p>
            <button onClick={()=>changeValue}>Change value</button>
        </div>
    );
};

export default About;