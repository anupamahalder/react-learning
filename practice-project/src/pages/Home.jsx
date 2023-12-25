import React from 'react';
import './Home.css';
import Header from './Header';
const Home = () => {
    const copyText = () =>{
        alert("Text copied!");
    }
    const cutText = () =>{
        console.log("Text cut successful!");
    }
    const pasteText = () =>{
        alert("Paste successful!");
    }
    const focusText = () =>{
        console.log("You have focused on input field!");
    }
    return (
        <div className='home'>
            <Header/>
            <h1>Hello from Home</h1>
            {/* Copy Event  */}
            <div>
                <p onCopy={copyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio vero, perspiciatis, impedit quia odio deleniti consectetur officia quibusdam illo incidunt fugit, officiis magni quis expedita error ipsa. Obcaecati ullam error eaque maxime voluptas eius hic voluptates eos illum exercitationem possimus, in assumenda a asperiores, quasi nisi. Cumque, doloribus ipsa.</p>

                <h2 onCut={cutText}>This is clipboard page you have cut some text from here</h2>
                <label htmlFor="">Enter name: </label>
                <input type="text" onPaste={pasteText}/> <br /><br />
                <label htmlFor="">Enter email:</label>
                <input type="email" onFocus={focusText}/>
            </div>
        </div>
    );
};

export default Home;