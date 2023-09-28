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
