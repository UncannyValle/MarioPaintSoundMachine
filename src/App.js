import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  const [sound, setSound] = useState("");
  //what happens when you click a button or press key
  function playBeat(beat) {
    setSound(beat);
    console.log(sound);
  }
  //Updates state to the correct button

  //updates display

  //plays the sound

  return (
    <div className="App" id="drum-machine">
      <h1 id="display">{sound}</h1>
      <div id="buttons">
        <Button hash="button-Q" clickHandler={() => playBeat("Q")}>
          Q
        </Button>
        <Button hash="button-W" clickHandler={() => playBeat("W")}>
          W
        </Button>
        <Button hash="button-E" clickHandler={() => playBeat("E")}>
          E
        </Button>
        <Button hash="button-A" clickHandler={() => playBeat("A")}>
          A
        </Button>
        <Button hash="button-S" clickHandler={() => playBeat("S")}>
          S
        </Button>
        <Button hash="button-D" clickHandler={() => playBeat("D")}>
          D
        </Button>
        <Button hash="button-Z" clickHandler={() => playBeat("Z")}>
          Z
        </Button>
        <Button hash="button-X" clickHandler={() => playBeat("X")}>
          X
        </Button>
        <Button hash="button-C" clickHandler={() => playBeat("C")}>
          C
        </Button>
      </div>
    </div>
  );
}

export default App;
