import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
