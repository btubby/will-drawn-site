import React, { useState, useRef, useEffect } from "react"

import Button from "@material-ui/core/Button"
import Slider from "@material-ui/core/Slider"

import * as Tone from "tone"

const track =
  "https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3"

export default function SeekExample() {
  const [value, setValue] = useState(30)
  const [benRefDuration, setBenRefDuration] = useState()
  const benPlayerRef = useRef(null)

  useEffect(() => {
    //   var player = new Tone.Player("media/test.mp3").toMaster();
    //   player.autostart = true;
    //   noLoop();
    // function mousePressed(player){
    //   if(player.state == "started"){
    //     player.stop();
    //   } else if (player.state == "stopped") {
    //     player.start();
    //   }
    // }

    benPlayerRef.current = new Tone.Player(track).toMaster()
    // benPlayerRef.current.autostart = true

    //   const x = new Tone.Synth(A1).toMaster()
    //   Tone.Buffer.on("load", () => {
    //     x.start()
    //   })
    //   //   // sampler2.current = new Sampler(MembraneSynth().toMaster())
  }, [])

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (!!benPlayerRef.current.buffer.loaded) {
            console.log("buffer:`   " + benPlayerRef.current.buffer)
            setBenRefDuration(benPlayerRef.current.buffer.duration)
            if (benPlayerRef.current.state == "started") {
              benPlayerRef.current.stop()
            } else if (benPlayerRef.current.state == "stopped") {
              benPlayerRef.current.start()
            }
          }
        }}
      >
        on/off
      </Button>
      SEEK Duration: {benRefDuration}
      <Slider
        onChange={(event, newValue) => {
          console.log(`Slider change ${newValue}`)
          setValue(newValue)
          benPlayerRef.current.seek(newValue)
        }}
        defaultValue={0.00000005}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={benRefDuration}
        valueLabelDisplay="auto"
      />
    </div>
  )
}
