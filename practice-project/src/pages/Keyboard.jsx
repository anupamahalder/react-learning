import React from 'react';

const Keyboard = () => {
    const onkeydownText = (event) =>{
        console.log("key pressed ", event.key);
    }
    // when we will up our hand from a keyword 
    const onkeyupText = (event) =>{
        console.log("Key up",event.key);
    }
    return (
        <div>
            <h1>Keyboard Event</h1>
            <input type="text" onKeyDown={onkeydownText} /> <br /> <br />
            <input type="text" onKeyUp={onkeyupText} /> <br />
        </div>
    );
};

export default Keyboard;