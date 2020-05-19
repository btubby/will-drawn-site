import React, { useState, useRef, useEffect } from "react"
import * as Tone from "tone"
import Button from "@material-ui/core/Button"
import A1 from "../audio/Accessory.mp3"

export default function PlayMP3() {
  const mp3 = useRef(null)

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    // https://github.com/Tonejs/Tone.js/wiki/Using-Tone.js-with-React-or-Vue
    mp3.current = new Tone.Sampler(
      { A1 },
      {
        onload: () => {
          setLoaded(true)
        },
      }
    ).toMaster()
  }, [])

  return (
    <div>
      <Button
        disabled={!isLoaded}
        onMouseDown={() => {
          mp3.current.triggerAttack("A1")
        }}
        onMouseUp={() => {
          mp3.current.triggerRelease("A1")
        }}
      >
        Tune in A[hold down]
      </Button>
      <Button
        disabled={!isLoaded}
        onMouseDown={() => {
          mp3.current.triggerAttack("B1")
        }}
        onMouseUp={() => {
          mp3.current.triggerRelease("B1")
        }}
      >
        Tune in B[hold down]
      </Button>
    </div>
  )
}
