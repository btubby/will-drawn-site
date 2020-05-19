import React, { useRef, useEffect } from "react"
import * as Tone from "tone"

import "./Piano.css"
// https://dev.to/shimphillip/building-a-piano-with-tone-js-5c2f

export default function Piano() {
  const synth = useRef(null)
  const polySynth = useRef(null)

  useEffect(() => {
    // synth.current = new Tone.Synth({
    //   oscillator: {
    //     type: "fmsquare",
    //     modulationType: "sawtooth",
    //     modulationIndex: 3,
    //     harmonicity: 3.4,
    //   },
    //   envelope: {
    //     attack: 0.001,
    //     decay: 0.1,
    //     sustain: 0.1,
    //     release: 0.1,
    //   },
    // })

    synth.current = new Tone.Synth({
      oscillator: {
        type: "triangle8",
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.4,
        release: 4,
      },
    })

    synth.current.oscillator.type = "sine"
    synth.current.toMaster()

    document.addEventListener("keydown", (e) => {
      // e object has the key property to tell which key was pressed
      switch (e.key) {
        case "w":
          return synth.current.triggerAttack("C4")
        case "3":
          return synth.current.triggerAttack("C#4")
        case "e":
          return synth.current.triggerAttack("D4")
        case "4":
          return synth.current.triggerAttack("D#4")
        case "r":
          return synth.current.triggerAttack("E4")
        case "t":
          return synth.current.triggerAttack("F4")
        case "6":
          return synth.current.triggerAttack("F#4")
        case "y":
          return synth.current.triggerAttack("G4")
        case "7":
          return synth.current.triggerAttack("G#4")
        case "u":
          return synth.current.triggerAttack("A4")
        case "8":
          return synth.current.triggerAttack("A#4")
        case "i":
          return synth.current.triggerAttack("B4")
        default:
          return
      }
    })

    // when the key is released, audio is released as well
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
        case "3":
        case "e":
        case "4":
        case "r":
        case "t":
        case "6":
        case "y":
        case "7":
        case "u":
        case "8":
        case "i":
          synth.current.triggerRelease()
      }
    })
  })

  return (
    <div>
      <ul
        id="piano"
        onMouseDown={(e) => {
          // fires off a note continously until trigger is released
          synth.current.triggerAttack(e.target.dataset.note)
        }}
        onMouseUp={(e) => {
          synth.current.triggerRelease()
        }}
      >
        <li data-note="C4" className="key">
          <div data-note="C#4" className="black-key">
            3
          </div>
          W
        </li>
        <li data-note="D4" className="key">
          <div data-note="D#4" className="black-key">
            4
          </div>
          E
        </li>
        <li data-note="E4" className="key">
          R
        </li>
        <li data-note="F4" className="key">
          <div data-note="F#4" className="black-key">
            6
          </div>
          T
        </li>
        <li data-note="G4" className="key">
          <div data-note="G#4" className="black-key">
            7
          </div>
          Y
        </li>
        <li data-note="A4" className="key">
          <div data-note="A#4" className="black-key">
            8
          </div>
          U
        </li>
        <li data-note="B4" className="key">
          I
        </li>
      </ul>
    </div>
  )
}
