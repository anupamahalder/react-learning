import React from 'react';

const MyProps = (props) => {
    console.log(props.name);
    // destructure 
    const {name} = props;
    return (
        <div>
            <h1>My name is {name}</h1>
        </div>
    );
};

export default MyProps;