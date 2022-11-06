import { useState, useEffect } from "react";
import './App.css';
import image from './pandaSmall.png';
import video from './relax.mp4';

  function App() {
  const [tips, setTips] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [participants, setParticipants] = useState();
  
  
  const fetchTips = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();
console.log(data)
   setTips(data.activity);
   setType(data.type);
   setLink(data.link);
   setParticipants(data.participants);
   
  };

  useEffect(() => {
  fetchTips();
  }, []);
  
  return (
  <div className="App">
    <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
    
   
      <img className="picture" src={image} alt="Panda" />
      <h1 className="header">Are you bored?</h1> 
      
   

      <h2>Find a new way to change it.</h2>
      
      <div className="frame">
      <button onClick={fetchTips} className="btn">To change</button>
      </div>
      
      <h3><b><span className="colorText">Try it:</span></b> {tips}.</h3>
      <h4>Type: "{type}" </h4>
      <h5>Number of persons: {participants} person(s)</h5>
      <a href={link} target="_blank" rel="noreferrer">Here is  a link to a resource ... sometimes</a>
      
  </div>
    
  );
}

export default App;


