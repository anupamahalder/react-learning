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
                    </select> <br />
                    {/* date and time  */}
                    <label htmlFor="">Select BDay: </label>
                    <input type="date" name="creationDate" onChange={formChange} /> <br />
                    {/* take input with text area  */}
                    <textarea name="about" onChange={formChange} id="" cols="30" rows="10" placeholder='Tell me about yourself'></textarea> <br /> <br />
                    {/* radio button  */}
                    <label htmlFor="">Select Your Gender:</label>
                    <input type="radio" value="male" name='gender' onChange={formChange} />
                    <label htmlFor="gender">Male</label>
                    <input type="radio" value="female" name='gender' onChange={formChange} />
                    <label htmlFor="gender">Female</label>
                    <input type="radio" value="not interest" name='gender' onChange={formChange} />
                    <label htmlFor="gender">Not Interest</label>
                </div>
            </div>
        </div>
    );
};

export default Contact;