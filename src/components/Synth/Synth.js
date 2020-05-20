import React, { useEffect, useRef, useState } from "react"
import * as Tone from "tone"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { Typography, Slider, Container } from "@material-ui/core"

// https://www.youtube.com/watch?v=8u1aQdG5Nrk
// https://www.youtube.com/watch?v=W3--FZ8X9lM

// https://medium.com/dev-red/tutorial-lets-make-music-with-javascript-and-tone-js-f6ac39d95b8c

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))
export default function Synth() {
  const loop = useRef(null)

  const bassSynth = useRef(null)
  const cymbalSynth = useRef(null)
  const amSynth = useRef(null)
  const fmSynth = useRef(null)

  let counter = 0

  const [cymbalSynthSettings, setCymbalSynthSettings] = useState({
    frequency: 200,
    envelope: {
      attack: 0.001,
      decay: 0.1,
      release: 0.01,
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5,
  })

  bassSynth.current = new Tone.MembraneSynth().toMaster()

  cymbalSynth.current = new Tone.MetalSynth(cymbalSynthSettings).toMaster()

  amSynth.current = new Tone.AMSynth({
    harmonicity: 2, // 3/1 think of this as a fraction https://www.youtube.com/watch?v=GOWj4IVpcag 6min
    detune: 0,
    oscillator: {
      type: "sine", // carrier signal
    },
    envelope: {
      attack: 0.001,
      decay: 0.01,
      sustain: 1,
      release: 0.5,
    },
    modulation: {
      type: "square", // modulation signal
    },
    modulationEnvelope: {
      attack: 0.005,
      decay: 0,
      sustain: 1,
      release: 0.5,
    },
  }).toMaster()

  fmSynth.current = new Tone.FMSynth({
    harmonicity: 1.1,
    modulationIndex: 10,
    detune: 0,
    oscillator: {
      type: "sine",
    },
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.5,
    },
    modulation: {
      type: "square",
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5,
    },
  }).toMaster()

  const song = (time) => {
    // console.log(Tone.Transport.position)

    if (counter % 4 === 0) {
      bassSynth.current.triggerAttackRelease("c1", "8n", time, 1) // note, interval, time, volume
    }

    // if (counter % 2 === 1) {
    if (counter % 4 !== 1) {
      if (counter === 3 || counter === 12) {
        cymbalSynth.current.envelope.decay = 0.5
      } else {
        cymbalSynth.current.envelope.decay = 0.01
      }
      cymbalSynth.current.triggerAttackRelease("32n", time, 0.3)
    }
    if (counter === 0) {
      amSynth.current.triggerAttackRelease("a1", "8n", time, 0.8)
    }
    if (counter === 10) {
      amSynth.current.triggerAttackRelease("Bb1", "8n", time, 0.8)
    }

    if (counter === 0) {
      fmSynth.current.triggerAttackRelease("a1", "16n", time, 0.8)
    }
    if (counter === 10) {
      fmSynth.current.triggerAttackRelease("Bb1", "16n", time, 0.8)
    }

    // count 0-15 and then back to 0
    counter = (counter + 1) % 16
    // console.log(counter)
  }

  // slider
  loop.current = new Tone.Loop(song, "16n") // loop beat time interval 4 beats/measure

  useEffect(() => {
    Tone.Transport.bpm.value = 140
    Tone.Transport.start()
    loop.current.start(0)
  })

  const classes = useStyles()
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>item</Paper> */}
          <Typography id="discrete-slider-small-steps" gutterBottom>
            frequency
          </Typography>
          <Slider
            defaultValue={2}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={10}
            marks
            min={100}
            max={200}
            value={cymbalSynthSettings.frequency}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => {
              setCymbalSynthSettings({
                ...cymbalSynthSettings,
                frequency: newValue,
              })
              console.log(cymbalSynthSettings)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={0}>
          cymbalSynth
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
        </Grid>
      </div>
    </Container>
  )
}
