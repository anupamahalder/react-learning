import React from 'react';
import './Contact.css';
import Header from './Header';
const Contact = (props) => {
    const formChange = (event) =>{
        // to show the name of the input tag 
        console.log(event.target.value);
    }
    return (
        <div>
            <Header/>
            <h1  className='contact'>Hello from Contact</h1>
            <div style={{backgroundColor:'lightpink', borderRadius: '10px', marginLeft:'auto',marginRight: 'auto',width: '350px', height: '400px'}}>
                <div style={{padding: '20px'}}>
                    <input type="text" name='userName' placeholder='Enter Your Name' onChange={formChange} /> <br />
                    <label htmlFor="">Select: </label>
                    <select name="category" onChange={formChange} placeholder="Select category" id="">
                        <option value="Programming">Programming</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Competitive Coding">Competitive Coding</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Contact;