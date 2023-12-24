import React from 'react';
import './Home.css';
import Header from './Header';
const Home = () => {
    const copyText = () =>{
        alert("Text copied!");
    }
    return (
        <div className='home'>
            <Header/>
            <h1>Hello from Home</h1>
            {/* Copy Event  */}
            <div>
                <p onCopy={copyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio vero, perspiciatis, impedit quia odio deleniti consectetur officia quibusdam illo incidunt fugit, officiis magni quis expedita error ipsa. Obcaecati ullam error eaque maxime voluptas eius hic voluptates eos illum exercitationem possimus, in assumenda a asperiores, quasi nisi. Cumque, doloribus ipsa.</p>
            </div>
        </div>
    );
};

export default Home;