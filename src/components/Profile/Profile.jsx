import React, { Component } from 'react';
import './Profile.css';
import Bio from './Bio';
import Links from './Links';
import Skills from './Skills';
// Using arrow function creating functional

const Profile = () => {
    //Here me is an object
    const me ={
        name: 'Anupama Halder',
        title: 'Frontend Developer | React Developer | MERN Stack',
    }
    return (
        // this.props
        // console.log("Profile--",this.props);
        <div className='main-div'>
            {/* this.me will give an object then name is the property of that object  */}
            <Bio name={me.name} title = {me.title}></Bio>
            <Skills skillA={'JavaScript'} skillB={'React JS'} skillC={'C++'}></Skills>
            <Links></Links>
        </div>
    );
};

export default Profile;