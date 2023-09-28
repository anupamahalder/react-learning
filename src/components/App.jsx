import React, {Component} from "react";
import Profile from "./Profile/Profile";
// import Skills from "./Profile/Skills";
import MyProps from "./Props";
import Bio from "./Profile/Bio"; 
import Skills from "./Profile/Skills";


const ChildComponent = props =>{
    <div>
        <h1>I am child component</h1>
        <p>I don't know what to do</p>
        {
            // {props.children}
        }
    </div>
}

// inherit react's component to App also we can destructure component from above
// now App class not an usual class it becomes a component
class App extends Component{
    
    count = 0;
    //declare a state
    state = {
        // initial value 
        count:0
    };

    // getContext(context){
    //     console.log(context)
    // }

    // render method should return something(jsx) jsx means html code in javascript 
    render(){
        // console.log('Profile props: ',this.props);
        // calling the function 
        // this.getContext(this)
        // console.log(count);
        return (
            <div>

                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{
                    // this.count++;
                    this.setState({count: this.state.count + 1});
                    console.log('clicked! ',this.state.count);
                }}
                >Add by 1</button>

                <Profile></Profile>
                <Bio name={'Rupsha Halder'} title={"Lawyer"}></Bio>
                <Skills skillA={'Java'} skillB={'Tailwind'} skillC={'Node JS'}></Skills>

                {/* <div style={{marginLeft:'100px',marginRight:'100px'}}>
                    <h3>List of Programmers</h3>
                    <p>Mr. X</p>
                    <Skills></Skills>
                    <p>Mr. Y</p>
                    <Skills></Skills> 
                    sending name props 
                    <MyProps name="Rupsha Halder"></MyProps>
                    <MyProps name="Priya Halder"></MyProps>
                    <MyProps name="Tiya Halder"></MyProps>
                </div> */}
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