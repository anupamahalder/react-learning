import React from 'react';
import './Profile.css';
const Profile = () => {
    return (
        <div className='main-div'>
            <div className='Bio'>
                <h3>Anupama Halder</h3>
                <p>Frontend Developer | React Developer | Problem Solver</p>
            </div>
            <div className='skills'>
                <h3>Skills: </h3>
                <ul className='flex-div'>
                    <li>React JS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div className='Links'>
                <h3>Social Links: </h3>
                <ul className='flex-div'>
                    <li><a href="#">FaceBook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LeetCode</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;