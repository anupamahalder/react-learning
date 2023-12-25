import React from 'react';

const Keyboard = () => {
    const onkeydownText = (event) =>{
        console.log("key pressed ", event.key);
    }
    return (
        <div>
            <h1>Keyboard Event</h1>
            <input type="text" onKeyDown={onkeydownText} />
        </div>
    );
};

export default Keyboard;