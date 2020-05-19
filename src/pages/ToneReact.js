import React, { useState, useRef, useEffect } from "react"

//https://github.com/Tonejs/Tone.js/wiki/Sources
// https://github.com/Tonejs/Tone.js/wiki
import * as Tone from "tone"

// MUI stuff
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"

import Piano from "../components/Piano/Piano"
import Theramin from "../components/Theramin"
import ToneButtons from "../components/ToneButtons"
import PlayMP3 from "../components/PlayMP3"
import SeekExample from "../components/SeekExample"
import Arpeggio from "../components/Arpeggio"
import PianoPoly from "../components/Piano/PianoPoly"

const useStyles = makeStyles({
  root: {
    width: 200,
  },
})

export const App = () => {
  const sampler = useRef(null)
  const sampler2 = useRef(null)
  const jakeSynth = useRef(null)

  const [theraminDisabled, settheraminDisabled] = React.useState(true)

  useEffect(() => {
    sampler2.current = new Tone.AMSynth().toMaster()

    // jakeSynth.current = new Tone.Synth({
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
    // }).toMaster()
  })

  // these work

  const handlePlaySaturday = () => {
    // var synth = new Tone.FMSynth().toMaster()
    //schedule a series of notes, one per second
    sampler2.current.triggerAttackRelease("C4", 0.5, 0)
    sampler2.current.triggerAttackRelease("E4", 0.5, 1)
    sampler2.current.triggerAttackRelease("G4", 0.5, 2)
  }

  return (
    <>
      <div>
        <Arpeggio />
        <hr />
        <SeekExample />
        <hr />
        <Piano />
        <PianoPoly />
        {/* <hr />
        Theramin
        <Checkbox
          checked={!theraminDisabled}
          onChange={() => {
            settheraminDisabled(!theraminDisabled)
            console.log(`checkbox clicked! new state: ${theraminDisabled}`)
          }}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        {!theraminDisabled && <Theramin />} */}
        <hr />
        <ToneButtons />
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaySaturday}
        >
          Synth Example1
        </Button>
      </div>
      <hr />
      <PlayMP3 />
    </>
  )
}

// ReactDOM.render(<App />, document.getElementById("app"))
