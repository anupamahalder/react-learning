import { useState } from "react";

const EventHandler = () => {
    // declare a state to store the input field initialize with empty string
    const [userName, setUserName] = useState('');
    // event handle arrow function whenever this function will be called we will get an event
    const handleBtnClicked = (event) =>{
        console.log(event.target);
        console.log('hello from button!')
    }
    const handleInputField = (event) =>{
        // target means that event element and value means the value of that element
        console.log(event.target.value);
        // whenever any change comes we will update the state 
        setUserName(event.target.value);
    }
    // hadle focus for input element 
    const handleInputFieldFocusEvent = event =>{
        console.log('I am focus event');
    }
    const handleInputFieldBlurEvent = event =>{
        // if there is no name in the input field then we will give an alert 
        if(!userName){
            alert('Please enter your name!');
        }
        console.log("I am blur event");
    }
    return (
        <div>
            {/* whenever the button will be clicked this given function will be called too so we need onClick event */}
            <button onClick={handleBtnClicked}
            style={{backgroundColor:'green',fontSize:'30px',margin:'20px', padding:'2px'}}>Click Me</button>

            {/* conditional rendering if there is no name then welcome will not be shown  */}
            {
                userName && <h1>Welcome, {userName}</h1>

            }
            {/* Input field event handling  */}
            <br /><br />
            {/* To get the data whatever we type in this input field then we need an event handler  */}
            <input onChange={handleInputField}
            onFocus={handleInputFieldFocusEvent}
            onBlur={handleInputFieldBlurEvent}
            style={{width:'500px', height:'30px', margin:'20px'}}
            type="text"
            value={userName}
            placeholder="Enter your name"
             />
        </div>
    );
};

export default EventHandler;