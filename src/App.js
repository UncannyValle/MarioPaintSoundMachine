import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

//Songs
import monkeySong from "./music/Monkey-Song.mp3";
import marioSong from "./music/Mario-Paint.mp3";
import flyswatter from "./music/Flyswatter.mp3";
import creative from "./music/creative-exercise.mp3";
import robot from "./music/Data-Robot.mp3";
import stamps from "./music/Special-Stamps.mp3";
import mysterious from "./music/Mysterious.mp3";
import bug from "./music/Big Robo Bug.mp3";
import paintbrush from "./music/Rainbow Paintbrush.mp3";

//Images
import mushroom from "./images/mushroom.png";
import star from "./images/star.png";
import life from "./images/1up.png";
import flower from "./images/flower.png";
import bomb from "./images/bomb.png";
import koopa from "./images/koopa.png";
import goomba from "./images/goomba.png";
import shy from "./images/shy.png";
import mario from "./images/mario.png";
import gameboy from "./images/gameboy.png";

//Main App
function App() {
  const [sound, setSound] = useState("*");
  const [image, setImage] = useState(mario);
  //what happens when you click a button
  function playBeat(beat) {
    let song = document.getElementById(beat.toUpperCase());
    song.play();
    setSound(beat.toUpperCase());
    updateDisplay(beat.toLowerCase());
  }

  // pause the music
  function pauseBeat() {
    let song = document.getElementById(sound);
    if (song === null) {
    } else {
      song.pause();
    }
  }

  window.addEventListener("keydown", (e) => {
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
      pauseBeat();
      playBeat(e.key);
      // updateDisplay(e);
    }
  });
  //Updates state to the correct button

  //updates display
  const updateDisplay = (button) => {
    // if (button === "q") setImage(mushroom);
    // if (button === "w") setImage(star);
    switch (button) {
      case "q":
        setImage(mushroom);
        break;
      case "w":
        setImage(star);
        break;
      case "e":
        setImage(flower);
        break;
      case "a":
        setImage(life);
        break;
      case "s":
        setImage(mario);
        break;
      case "d":
        setImage(bomb);
        break;
      case "z":
        setImage(goomba);
        break;
      case "x":
        setImage(koopa);
        break;
      case "c":
        setImage(shy);
        break;
      default:
    }
  };
  //plays the sound

  return (
    <div className="app" id="drum-machine">
      <h1>MARIO SOUND MAKER</h1>
      <h2> Press the buttons bellow or corresponding keys to play a sound</h2>
      <div className="game">
        <img src={gameboy} alt="gameboy" id="gameboy" />
        <img id="display" src={image} alt={sound}></img>
        <div id="buttons">
          <Button
            hash="button-Q"
            clickHandler={() => {
              pauseBeat();
              playBeat("Q");
            }}
          >
            <img className="image" src={mushroom} alt="mushroom" />Q
            <audio className="clip" id="Q" src={monkeySong}></audio>
          </Button>
          <Button
            hash="button-W"
            clickHandler={() => {
              pauseBeat();
              playBeat("W");
            }}
          >
            <img className="image" src={star} alt="star" />W
            <audio className="clip" id="W" src={marioSong}></audio>
          </Button>
          <Button
            hash="button-E"
            clickHandler={() => {
              pauseBeat();
              playBeat("E");
            }}
          >
            <img className="image" src={flower} alt="flower" />E
            <audio className="clip" id="E" src={flyswatter}></audio>
          </Button>
          <Button
            hash="button-A"
            clickHandler={() => {
              pauseBeat();
              playBeat("A");
            }}
          >
            <img className="image" src={life} alt="life" />A
            <audio className="clip" id="A" src={creative}></audio>
          </Button>
          <Button
            hash="button-S"
            clickHandler={() => {
              pauseBeat();
              playBeat("S");
            }}
          >
            <img className="image" src={mario} alt="Mario" /> S
            <audio className="clip" id="S" src={robot}></audio>
          </Button>
          <Button
            hash="button-D"
            clickHandler={() => {
              pauseBeat();
              playBeat("D");
            }}
          >
            <img className="image" src={bomb} alt="bomb" /> D
            <audio className="clip" id="D" src={stamps}></audio>
          </Button>
          <Button
            hash="button-Z"
            clickHandler={() => {
              pauseBeat();
              playBeat("Z");
            }}
          >
            <img className="image" src={goomba} alt="goomba" />Z
            <audio className="clip" id="Z" src={mysterious}></audio>
          </Button>
          <Button
            hash="button-X"
            clickHandler={() => {
              pauseBeat();
              playBeat("X");
            }}
          >
            <img className="image" src={koopa} alt="koopa" />X
            <audio className="clip" id="X" src={bug}></audio>
          </Button>
          <Button
            hash="button-C"
            clickHandler={() => {
              pauseBeat();
              playBeat("C");
            }}
          >
            <img className="image" src={shy} alt="shy" />C
            <audio className="clip" id="C" src={paintbrush}></audio>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
