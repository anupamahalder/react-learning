import React from 'react';

const Skills = (props) => {
    return (
        <div className=''>
            <h3>Skills: </h3>
            <ul style={{marginTop:'30px', marginLeft:'100px',marginRight:'100px'}}>
                <li>{props.skillA}</li>
                <li>{props.skillB}</li>
                <li>{props.skillC}</li>
            </ul>
        </div>
    );
};

export default Skills;