import React from "react";
// inherit react's component to App also we can destructure component from above
// now App class not an usual class it becomes a component
class App extends React.Component{
    // render method should return something(jsx) jsx means html code in javascript 
    render(){
        return <h1>Hello React, You are awesome!</h1>
    }
}
//we have to export any component deafultly
export default App;