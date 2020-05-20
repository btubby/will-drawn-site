import React, { useRef, useEffect } from "react"

//https://github.com/Tonejs/Tone.js/wiki/Sources
// https://github.com/Tonejs/Tone.js/wiki
import * as Tone from "tone"

// MUI stuff
// import { makeStyles } from "@material-ui/core/styles"

import ToneButtons from "../components/ToneButtons"
import PlayMP3 from "../components/PlayMP3"
import SeekExample from "../components/SeekExample"
import Arpeggio from "../components/Arpeggio"
import PianoPoly from "../components/PianoPoly/PianoPoly"
import { Container } from "@material-ui/core"

export const App = () => {
  const sampler2 = useRef(null)
  useEffect(() => {
    sampler2.current = new Tone.AMSynth().toMaster()
  })
  // const handlePlaySaturday = () => {
  //   // var synth = new Tone.FMSynth().toMaster()
  //   //schedule a series of notes, one per second
  //   sampler2.current.triggerAttackRelease("C4", 0.5, 0)
  //   sampler2.current.triggerAttackRelease("E4", 0.5, 1)
  //   sampler2.current.triggerAttackRelease("G4", 0.5, 2)
  // }
  return (
    <Container maxWidth="sm">
      <PlayMP3 />
      <Arpeggio />
      <SeekExample />
      <PianoPoly />
      <ToneButtons />
    </Container>
  )
}
