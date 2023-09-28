import React from 'react';

const Bio = (props) => {
    return (
        <div className=''>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
    );
};

export default Bio;