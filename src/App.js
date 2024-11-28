import logo from './logo.svg';
import './App.css';import Searchicon from './assets/Searchicon.png';

function App() {
  return (
   <>
    <nav>
     <button className="button">Give Feedback</button>
    
     <div className="input"><input type="text" className="input" placeholder="search a song of your choice"/></div>
     <button className="image"> <img src={Searchicon} alt="somthing else"/></button>
   
    </nav>
  </>
);
}

export default App;
