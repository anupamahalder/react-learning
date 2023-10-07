import { useState } from "react";

const Forms = () => {
    // declare a state for name input
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio ] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [btnClicked, setBtnClicked] = useState(false);
    const handleChange = event =>{
        // to get the input field name where actually the changes happen 
        // so using event.target.name we can upadate the state 
        // console.log(event.target.name);
        const stateName = event.target.name;
        // console.log("state bname", stateName);
        const stateValue = event.target.value;
        if(stateName == 'name'){
            setName(stateValue);
            console.log(name);
        }
        else if(stateName == 'country'){
            setCountry(stateValue);
        }
        else if(stateName == 'bio'){
            setBio(stateValue);
        }
        else if(stateName == 'birthDate'){
            setBirthDate(stateValue);
        }
    }
    const handleShowDataBtn = () =>{
        // toggle 
        setBtnClicked(!btnClicked);
    }
    return (
        <div style={{marginLeft:'50px'}}>
            <h1 style={{margin:'10px auto', textAlign:'center'}}>Working with Forms in React</h1>
            <hr />
            <h3>Inputs</h3> <br />
            <input onChange={handleChange}
             type="text" name="name"placeholder="Your name" />
            <br /><br />
            {/* To input the country we need select element and giving options */}
            <select onChange={handleChange}
             style={{width:'200px',color:'black'}}
             name="country" id="">
                <option>Select Your Country</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Srilanka">Srilanka</option>
                <option value="USA">USA</option>
            </select> <br /> <br />
            {/* for bio input  */}
            <textarea onChange={handleChange}
             name="bio" id=""
            placeholder="Tell me about yourself" cols="30" rows="10"></textarea> <br/> <br/>
            {/* Input birthdate from user  */}
            Birthdate: <input onChange={handleChange}
             type="date" name="birthDate" id="" /> <br /> <br />
            <button onClick={handleShowDataBtn}
            >
                {
                    btnClicked ? "Don't show data" : 'Show data'
                }
            </button> <br /> <br />
             {
                btnClicked && <div>
                <h1>User Details:</h1> <br />
                {
                    name && <h3>Name: {name}</h3>
                } <br />
                {
                    country && <h3>Country: {country}</h3>
                } <br />
                {
                    bio && <h3>Bio: {bio}</h3>
                } <br />
                {
                    birthDate && <h3>Birth Date: {birthDate}</h3>
                } <br />
             </div>
             }
        </div>
    );
};

export default Forms;