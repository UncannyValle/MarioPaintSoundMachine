import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

//Songs
import monkeySong from "./music/Monkey-Song.mp3";
import marioSong from "./music/Mario-Paint.mp3";
import flyswatter from "./music/Flyswatter.mp3";
import creative from "./music/creative-exercise.mp3"
import robot from "./music/Data-Robot.mp3"
import stamps from "./music/Special-Stamps.mp3"
import mysterious from "./music/Mysterious.mp3"
import bug from "./music/Big Robo Bug.mp3"
import paintbrush from "./music/Rainbow Paintbrush.mp3"

function App() {
  const [sound, setSound] = useState("");

  //what happens when you click a button
  function playBeat(beat) {
    let song = document.getElementById(beat);
    song.play();
    setSound(beat);
  }

  // pause the music
  function pauseBeat() {
    let song = document.getElementById(sound);
    if (song === null) {
      console.log("cool");
    } else {
      song.pause();
    }
  }

  window.addEventListener("keyup", e => {
    if (
      e.key === "q" ||
      e.key === "w" ||
      e.key === "e" ||
      e.key === "a" ||
      e.key === "s" ||
      e.key === "d" ||
      e.key === "z" ||
      e.key === "x" ||
      e.key === "c"
    ) {
      setSound(e.key.toUpperCase());
      pauseBeat();
      let song = document.getElementById(e.key.toUpperCase());
      song.play();
    }
  });
  //Updates state to the correct button

  //updates display

  //plays the sound

  return (
    <div className="App" id="drum-machine">
      <h1 id="display">{sound}</h1>
      <div id="buttons">
        <Button
          hash="button-Q"
          clickHandler={() => {
            pauseBeat();
            playBeat("Q");
          }}
        >
          Q<audio className="clip" id="Q" src={monkeySong}></audio>
        </Button>
        <Button
          hash="button-W"
          clickHandler={() => {
            pauseBeat();
            playBeat("W");
          }}
        >
          W<audio className="clip" id="W" src={marioSong}></audio>
        </Button>
        <Button
          hash="button-E"
          clickHandler={() => {
            pauseBeat();
            playBeat("E");
          }}
        >
          E<audio className="clip" id="E" src={flyswatter}></audio>
        </Button>
        <Button
          hash="button-A"
          clickHandler={() => {
            pauseBeat();
            playBeat("A");
          }}
        >
          A<audio className="clip" id="A" src={creative}></audio>
        </Button>
        <Button
          hash="button-S"
          clickHandler={() => {
            pauseBeat();
            playBeat("S");
          }}
        >
          S<audio className="clip" id="S" src={robot}></audio>
        </Button>
        <Button
          hash="button-D"
          clickHandler={() => {
            pauseBeat();
            playBeat("D");
          }}
        >
          D<audio className="clip" id="D" src={stamps}></audio>
        </Button>
        <Button
          hash="button-Z"
          clickHandler={() => {
            pauseBeat();
            playBeat("Z");
          }}
        >
          Z<audio className="clip" id="Z" src={mysterious}></audio>
        </Button>
        <Button
          hash="button-X"
          clickHandler={() => {
            pauseBeat();
            playBeat("X");
          }}
        >
          X<audio className="clip" id="X" src={bug}></audio>
        </Button>
        <Button
          hash="button-C"
          clickHandler={() => {
            pauseBeat();
            playBeat("C");
          }}
        >
          C<audio className="clip" id="C" src={paintbrush}></audio>
        </Button>
      </div>
    </div>
  );
}

export default App;
