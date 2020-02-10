import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button"
function App() {
  const [sound, setSound] = useState('')
  //what happens when you click a button or press key
  function playBeat()  {
    setSound('beat')
    console.log(sound)
  }
  //Updates state to the correct button

  //updates display

  //plays the sound

  return (
    <div className="App" id="drum-machine">
      <h1 id="display">{sound}</h1>
    <Button clickHandler={playBeat}>cool beans</Button>
    </div>
  );
}

export default App;
