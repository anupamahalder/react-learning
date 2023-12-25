## What is React?
React is a free and open-source front-end JavaScript library user interfaces based on UI components.

## How does React Work?
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

## Tell me the history of React?
1. React.JS was first used in 2011 for facebook's Newsfeed feature.
2. Facebook Software Engineer, Jordan Walke created it.
3. Initial Release to the Public(V0.3.0) was in July 2013.

## Which JavaScript concepts are need to learn React?
JavaScript(ES6): Template Literals, Function & Arrow Function, Object Destructuring, Spread & Rest Operator, Module Import & Export, Promise & Async, NPM/Yarn/NVM Basic uses, Document Object Model(DOM), Browser Object Model(BOM) Server Deploy.

## What is component?
Component is a part of the website. React is famous for its components. Components can be a small keyword or a full area of the website.

## Types of Components:
### 1. Functional components
    const Compo = ()=>{
        return (
            <>
            <h1>Hello</h1>
            </>
        );
    }
    export default Compo;
### 2. Class based components
    class Compo extends Component{
        render(){
            return(
                <>
                <h1>Hello</h1>
                </>
            );
        }
    }
    export default Compo;

## What is JSX?
JSX is JavaScript XML, is a syntax extension for JavaScript. It looks like HTML in JavaScript files but behind the scene it becomes JavaScript for making it easier to define the structure of React components. Also we can write regular JavaScript in our code while using JSX.

JSX gets transformed into regular JavaScript by tools like Babel before being rendered in the browser.
It provides a more concise and readable way to describe the structure of user interfaces in React.

## What is Props ?
"Props" is a shorthand term for "Properties" in React. Ii is the parameter of the component. In a React component, "props" is an object that stores values or configuration settings passed to the component from its parent component. These values allow the parent component to communicate with and customize the behavior of the child component. props are read-only and help create dynamic and reusable components in a React application.

## To avoid problem in Styling with CSS:
We use <strong>module</strong> css. The css file name will be like this filename.module.css 
With working with same class name there will be no conflict with global css.
to import the module file
    
    import anyNameForStyle from "./filename.module.css";

then destructure the css object to style the element.

## Controlled Form and Uncontrolled Form:
In a controlled component, form data is handled by a React component. Ex: when we give value attribute to an input tag and must have an onChenge handler to handle input onChange event will consists of a callback function.

The alernative is uncontrolled components, where form data is handled by the DOM itself.