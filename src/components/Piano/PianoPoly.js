import React, { useRef, useEffect, useState } from "react"
import * as Tone from "tone"

import Slider from "@material-ui/core/Slider"

import "./Piano.css"
// https://dev.to/shimphillip/building-a-piano-with-tone-js-5c2f

export default function PianoPoly() {
  const synth = useRef(null)
  const polySynth = useRef(null)

  const [value, setValue] = useState(0)

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

    // polySynth.current = new Tone.PolySynth(4, Tone.Synth).toMaster()
    const distortion = new Tone.Distortion(value)
    // var tremolo = new Tone.Tremolo().start()

    polySynth.current = new Tone.PolySynth(4, Tone.Synth).chain(
      distortion,
      // tremolo,
      Tone.Master
    )

    document.addEventListener("keydown", (e) => {
      // e object has the key property to tell which key was pressed
      switch (e.key) {
        case "d":
          // return synth.current.triggerAttack("C4")
          return polySynth.current.triggerAttack(["C4", "E4", "G4", "B4"])

        case "r":
          return synth.current.triggerAttack("C#4")
        case "f":
          return synth.current.triggerAttack("D4")
        case "t":
          return synth.current.triggerAttack("D#4")
        case "g":
          return synth.current.triggerAttack("E4")
        case "h":
          return synth.current.triggerAttack("F4")
        case "u":
          return synth.current.triggerAttack("F#4")
        case "j":
          return synth.current.triggerAttack("G4")
        case "i":
          return synth.current.triggerAttack("G#4")
        case "k":
          return synth.current.triggerAttack("A4")
        case "o":
          return synth.current.triggerAttack("A#4")
        case "l":
          return synth.current.triggerAttack("B4")
        default:
          return
      }
    })

    // when the key is released, audio is released as well
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          polySynth.current.triggerRelease(["C4", "E4", "G4", "B4"])
        case "r":
        case "f":
        case "t":
        case "g":
        case "h":
        case "u":
        case "j":
        case "i":
        case "k":
        case "o":
        case "l":
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
            R
          </div>
          D
        </li>
        <li data-note="D4" className="key">
          <div data-note="D#4" className="black-key">
            T
          </div>
          F
        </li>
        <li data-note="E4" className="key">
          G
        </li>
        <li data-note="F4" className="key">
          <div data-note="F#4" className="black-key">
            U
          </div>
          H
        </li>
        <li data-note="G4" className="key">
          <div data-note="G#4" className="black-key">
            I
          </div>
          J
        </li>
        <li data-note="A4" className="key">
          <div data-note="A#4" className="black-key">
            O
          </div>
          K
        </li>
        <li data-note="B4" className="key">
          L
        </li>
      </ul>
      distortion
      <Slider
        onChange={(event, newValue) => {
          console.log(`Slider change ${newValue}`)
          setValue(newValue)
        }}
        defaultValue={0}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.1}
        marks
        min={0}
        max={1}
        valueLabelDisplay="auto"
      />
    </div>
  )
}
