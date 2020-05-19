import React, { useRef, useEffect, useCallback, useState } from "react"
import * as Tone from "tone"
import Slider from "@material-ui/core/Slider"

import styled from "styled-components"

export const Title = styled.div`
  position: absolute;
  right: 3vw;
  top: 3em;
  min-width: 3vw;
  max-width: 10vw;
  color: red;
`

// https://www.smashingmagazine.com/2016/06/make-music-in-the-browser-with-a-web-audio-theremin/

export default function Theramin() {
  const oscillator = useRef(null)
  const context = useRef(null)
  const [value, setValue] = useState(0)

  const downListner = (e) => {
    // Mouse has been pressed
    // console.log(`MouseDOWN x=${e.clientX} `)
    oscillator.current = context.current.createOscillator()

    // smoothly transition the frequency of the oscillator over time.
    // The first parameter is the frequency to change the oscillator to,
    // the second says when to do it (now), and the third is the rate at which it should change
    // oscillator.current.frequency.value = calculateFrequency(e.clientX)
    e.clientX &&
      oscillator.current.frequency.setTargetAtTime(
        calculateFrequency(e.clientX),
        context.current.currentTime,
        0.01
      )
    oscillator.current.connect(context.current.destination)
    oscillator.current.start(context.current.currentTime)
  }

  const upListener = () => {
    // Mouse has been released
    console.log(`MouseUP`)
    if (oscillator.current) {
      oscillator.current.stop(context.current.currentTime)
      oscillator.current.disconnect()
    }
  }
  const moveListner = (e) => {
    oscillator.current.frequency.setTargetAtTime(
      calculateFrequency(e.clientX),
      context.current.currentTime,
      0.01
    )
  }
  useEffect(() => {
    var distortion = new Tone.Distortion(value)

    // make and start a 440hz sine tone
    oscillator.current = new Tone.Oscillator(440, "sine")
      .chain(distortion)
      .toMaster()
      .start()
    oscillator.current.toMaster()

    context.current = new Tone.Context()
    oscillator.current.stop(context.current.currentTime + 0.1)

    window.addEventListener("mousedown", function (e) {
      downListner(e)
    })
    window.addEventListener("mouseup", upListener)
    window.addEventListener("mousemove", function (e) {
      moveListner(e)
    })

    return () => {
      console.log("Removing listeners!")
      window.removeEventListener("mousemove", moveListner, false)
      window.removeEventListener("mousedown", downListner, false)
      window.removeEventListener("mouseup", upListener, false)
    }
  }, [])

  const calculateFrequency = function (mouseXPosition) {
    var minFrequency = 20,
      maxFrequency = 2000

    // To calculate the ratio, we divide mouseXPosition by the width of the browser’s window.
    // Then, to get the frequency, multiply this ratio by the maximum frequency.
    // This gives us a frequency of 0 to 2000 Hz. 0 Hz is inaudible, so we’ll just add 20 to get it over the threshold for human hearing
    return (mouseXPosition / window.innerWidth) * maxFrequency + minFrequency
  }

  return (
    <>
      <Title>Theramin.</Title>
      <div>
        <Slider
          onChange={(event, newValue) => {
            console.log(`theramin change ${newValue}`)
            // @ts-ignore
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
    </>
  )
}
