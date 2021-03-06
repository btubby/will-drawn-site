import React, { useRef, useEffect, useState } from "react"
import * as Tone from "tone"
import ImageMapper from "react-image-mapper"

import { Container } from "@material-ui/core"
import { areasMap } from "./AreasMap"

// https://dev.to/shimphillip/building-a-piano-with-tone-js-5c2f
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", setFromEvent)
    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])
  return position
}

export default function PianoHandDrawn() {
  const synth = useRef(null)
  // const polySynth = useRef(null)
  // const position = useMousePosition()

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
    // document.addEventListener("keydown", (e) => {
    //   // e object has the key property to tell which key was pressed
    //   switch (e.key) {
    //     case "w":
    //       return synth.current.triggerAttack("C4")
    //     case "3":
    //       return synth.current.triggerAttack("C#4")
    //     case "e":
    //       return synth.current.triggerAttack("D4")
    //     case "4":
    //       return synth.current.triggerAttack("D#4")
    //     case "r":
    //       return synth.current.triggerAttack("E4")
    //     case "t":
    //       return synth.current.triggerAttack("F4")
    //     case "6":
    //       return synth.current.triggerAttack("F#4")
    //     case "y":
    //       return synth.current.triggerAttack("G4")
    //     case "7":
    //       return synth.current.triggerAttack("G#4")
    //     case "u":
    //       return synth.current.triggerAttack("A4")
    //     case "8":
    //       return synth.current.triggerAttack("A#4")
    //     case "i":
    //       return synth.current.triggerAttack("B4")
    //     default:
    //       return
    //   }
    // })

    // when the key is released, audio is released as well
    // document.addEventListener("keyup", (e) => {
    //   switch (e.key) {
    //     default:
    //     case "w":
    //     case "3":
    //     case "e":
    //     case "4":
    //     case "r":
    //     case "t":
    //     case "6":
    //     case "y":
    //     case "7":
    //     case "u":
    //     case "8":
    //     case "i":
    //       synth.current.triggerRelease()
    //   }
    // })
  })

  return (
    <>
      {/* <div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && (
          <>
            <p>You are a desktop or laptop</p>
            {isBigScreen && <p>You also have a huge screen</p>}
            {isTabletOrMobile && (
              <p>You are sized like a tablet or mobile phone though</p>
            )}
          </>
        )}
        {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
        {isRetina && <p>You are retina</p>}
      </div> */}
      {/* <div>
        {position.x}:{position.y}
      </div> */}

      <Container>
        <ImageMapper
          src={"http://www.tubbycreative.com/drawnwebsite/keyscontrols.png"}
          map={areasMap}
          width={1000}
          // onLoad={() => this.load()}
          onClick={(area) => {
            console.log(area._id)
          }}
          // onMouseEnter={(area) => this.enterArea(area)}
          // onMouseLeave={(area) => this.leaveArea(area)}
          // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
          // onImageClick={(evt) => this.clickedOutside(evt)}
          // onImageMouseMove={(evt) => this.moveOnImage(evt)}
        />
      </Container>

      {/* <ul
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
      </ul> */}
    </>
  )
}
