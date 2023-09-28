import React, {Component} from "react";
import Profile from "./Profile/Profile";
// inherit react's component to App also we can destructure component from above
// now App class not an usual class it becomes a component
class App extends Component{
    // render method should return something(jsx) jsx means html code in javascript 
    render(){

        return (
            <div>
                <Profile></Profile>
            </div>
        )

        // //we can make an object of attributes then spread it to its required place
        // const obj = {
        //     title : 'My dream',
        //     id: 'anu1'
        // }
        // const name = "Anupama Halder";
        // // storing the jsx into a variable 
        // const bio = <div>
        //     <h1>I am {name} from functional component</h1>   
        //     <p>Hello dear</p>
        // </div> 
        // return <h1 {...obj}>Hello React, You are awesome! {bio}</h1>
    }
}
//we have to export any component deafultly
export default App;



//Functional component
function myFunctionalComponent(){
    const name = "Anupama Halder"
    return <h1>I am {name} from functional component</h1>
}
//Using arrow function we can create functional component
const AnotherFunctionalComponent=()=>{
    return <h1>I am from another functional component</h1>
}

// <></> this is known as react fragment