import React, { useRef, useEffect } from "react"
import * as Tone from "tone"

import Button from "@material-ui/core/Button"

export default function Arpeggio() {
  const synth = useRef(null)

  useEffect(() => {
    synth.current = new Tone.Synth().toMaster()
  })

  const handleClick = () => {
    const pattern = new Tone.Pattern(
      function (time, note) {
        synth.current.triggerAttackRelease(note, "8n", time)
      },
      ["C4", "E4", "G4", "C5", "E5", "G5"]
    )
    // begin at the beginning
    pattern.start(0)
    Tone.Transport.start()
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        loop start
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          Tone.Transport.stop()
        }}
      >
        loop stop
      </Button>
    </div>
  )
}
