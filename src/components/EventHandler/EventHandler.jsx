
const EventHandler = () => {
    // event handle arrow function whenever this function will be called we will get an event
    const handleBtnClicked = (event) =>{
        console.log(event.target);
        console.log('hello from button!')
    }
    return (
        <div>
            {/* whenever the button will be clicked this given function will be called too so we need onClick event */}
            <button onClick={handleBtnClicked}
            style={{backgroundColor:'green',fontSize:'30px', padding:'2px'}}>Click Me</button>
        </div>
    );
};

export default EventHandler;