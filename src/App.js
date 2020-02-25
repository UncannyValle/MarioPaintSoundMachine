import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

//Songs
import monkeySong from "./music/Monkey-Song.mp3";
import marioSong from "./music/Mario-Paint.mp3";
import flyswatter from "./music/Flyswatter.mp3"

function App() {
  const [sound, setSound] = useState("");
  //what happens when you click a button or press key
  function playBeat(beat) {
    let song = document.getElementById("song-" + beat);
    song.pause();
    setSound(beat);
    song.play();
  }
  //Updates state to the correct button

  //updates display

  //plays the sound

  return (
    <div className="App" id="drum-machine">
      <h1 id="display">{sound}</h1>
      <div id="buttons">
        <Button hash="button-Q" clickHandler={() => playBeat("Q")}>
          Q<audio id="song-Q" src={monkeySong} autoPlay></audio>
        </Button>
        <Button hash="button-W" clickHandler={() => playBeat("W")}>
          W<audio id="song-W" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-E" clickHandler={() => playBeat("E")}>
          E<audio id="song-E" src={flyswatter} autoPlay></audio>
        </Button>
        <Button hash="button-A" clickHandler={() => playBeat("A")}>
          A<audio id="song-A" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-S" clickHandler={() => playBeat("S")}>
          S<audio id="song-S" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-D" clickHandler={() => playBeat("D")}>
          D<audio id="song-D" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-Z" clickHandler={() => playBeat("Z")}>
          Z<audio id="song-Z" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-X" clickHandler={() => playBeat("X")}>
          X<audio id="song-X" src={marioSong} autoPlay></audio>
        </Button>
        <Button hash="button-C" clickHandler={() => playBeat("C")}>
          C<audio id="song-C" src={marioSong} autoPlay></audio>
        </Button>
      </div>
    </div>
  );
}

export default App;
