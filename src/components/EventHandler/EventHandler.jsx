
const EventHandler = () => {
    // event handle arrow function whenever this function will be called we will get an event
    const handleBtnClicked = (event) =>{
        console.log(event.target);
        console.log('hello from button!')
    }
    const handleInputField = (event) =>{
        // target means that event element and value means the value of that element
        console.log(event.target.value);
    }
    return (
        <div>
            {/* whenever the button will be clicked this given function will be called too so we need onClick event */}
            <button onClick={handleBtnClicked}
            style={{backgroundColor:'green',fontSize:'30px',margin:'20px', padding:'2px'}}>Click Me</button>

            {/* Input field event handling  */}
            <br /><br />
            {/* To get the data whatever we type in this input field then we need an event handler  */}
            <input onChange={handleInputField}
            style={{width:'500px', height:'30px', margin:'20px'}}
            type="text"
            placeholder="Enter something"
             />
        </div>
    );
};

export default EventHandler;