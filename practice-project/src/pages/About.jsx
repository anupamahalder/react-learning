import React from 'react';
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
    
    return (
        <div className='about'>
            <Header/>
            <h1>Hello from About</h1>
            <button>Change value</button>
        </div>
    );
};

export default About;