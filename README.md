# Getting Started with Create React App

This project was bootstrapped with [Create React App]

# A component has two layers --- 
##  1. Data and Logic Layer (optional)
        (i) State
        (ii) Variables or Properties
        (iii) Function or Methods
        (iv) Life Cycle Methods

##  2. Representation Layer (required)
        (v) JSX

<h2>NOTE:</h2> 
    We cannot skip the representation layer, so we must call the render() method to be a component,<br> this render() function represents the representation layer or render <br> the data ui data in browser.
    
<h2>State:</h2>
    State is the component's own data. Whenever state will be changed the render() <br> function will be called autometically. The meaning of re render(), our representation layer will be changed.<br> That means if we want to change anything in our UI we have to use state <br> and change state.  

<h2>Variables or Properties:</h2>
    As component itself a class, so class will have its variables. The variables of a class known as properties or class variable. If value of class variables or properties will chnage then there will be no render() method called.
    
<h2>Functions or Methods:</h2>
    In a class we can declare as many functions as we want. Example: To change state, getting data from internet, and handling event we have to work with multiple methods inside a component. Inside data/logic layer we can define our own methods/functions.

<h2>Life Cycle Methods:</h2>
    These are the predefined methods, means after a certain steps these methods get executed. We donot define these methods these methods automatically come when we extends component from react. So we can overwrite this method. Example: constructor is a life cycle method when a component mounted/rendered on browser. 

<h2>JSX:</h2>
    Representation layer means render() function, the task of render() function is to return JSX (JSX means HTML code inside JavaScript)
<<<<<<< HEAD

## There are two different ways to create React component
    1. Class Based Component / Stateful component / Smart Component
    2. Functional Component / Stateless component / Dumb Component


<h2>Class Based Component:</h2>
    Stateful component/ class based component can only work with state. As it works like smart so it is known as smart component.

<h2>Functional Component / Stateless component:</h2>
    Here we use functions of JavaScript. The main problem of this component is we cannot work with any state it is stateless.
    Any JavaScript function, at the end which returns JSX is a functional component.
    We will use this when we have to generate UI and there will be no logic behind that.

### Note:
    1. Custome component's name will start with capital letter
    2. If we have mutliple properties for an element then we can create an object for that and then spread it to that element
    3. We can execute any javaScript code inside {} curly braces and that should me single statement not mutliple statement.
    4. jsx code which looks like html is actually a statement so we can store that in a variable. And using variable is a task of javaScript.
=======
>>>>>>> aec2ec80946accd52d11ee68be3eeabbb7f46aca

## Props:
    1. Each class based component automatically has props named property. using this.props we can see that
    2. From props we can get data which will be dynamic for components
    3. When custom component will take attributes those are called props/property
    4. Data will be given from where the component is being called

### How to pass Function as Props:
    1. From parent to child the function will be passed as props, then we can call the function as our need in the child component

### State:
    1. State is a javaScript object. We can use state like we use object

## What is Event?
    - Event is an object which only triggers when something sepcial happens and return an object to the listener which contains information related to taht event.
    - Ex: Button Click, Input Element, Form submission, Mouse Enter, Mouse Leave
    - Whichever starts with 'on' indicates event like 'onClick', 'onChange','onSubmit' and so on.

### NOTE: 
    Event is the only way to interact with users and get users feedback.

### Every Event has --
    1. Name
    2. Listener function
### Elements that are made for event handling---
    - button
    - form/input field
### More on Event:
    - event.target gives in which element the event is happenning.
### NOTE:
    Any event handler whenever we pass it to any event then automatically the event object will be passed by that event so we don't need to pass any event.