import React, { useState, useEffect } from "react"
import AnimatedFigure from "../../components/AnimatedFigure"
import {
  BirthdayMan,
  AlienMan,
  Tank,
  EatCarMan,
  Knobs,
  Title,
} from "./pyngytStyles"
import { URLBase } from "./Pyngyt"
import { Knob } from "react-rotary-knob"
import * as skins from "react-rotary-knob-skin-pack"

// @ts-ignore
import Rita1 from "../../audio/rita1.wav"
// @ts-ignore
import Rita2 from "../../audio/rita2.wav"
// @ts-ignore
import Rita3 from "../../audio/rita3.wav"
// @ts-ignore
import Rita4 from "../../audio/rita4.wav"

// const useStyles = makeStyles({
//   root: {
//     height: 300,
//   },
// })

export default function (props) {
  // console.log("CONTENT ", props.env)

  useEffect(() => {
    // console.log("toggle playstate")
    // togglePlayState
  })

  // const [value, setValue] = React.useState(0.1)
  const [BirthdayManknob, setBirthdayManKnob] = useState(0.5)
  const [AlienManknob, setAlienManKnob] = useState(0.5)
  const [TankKnob, setTankKnob] = useState(0.5)
  const [EatCarManknob, setEatCarManKnob] = useState(0.5)

  const [BirthdayManPlaying] = useState(false)
  const [AlienManPlaying] = useState(false)
  const [TankPlaying] = useState(false)
  const [EatCarManPlaying] = useState(false)

  //https://codesandbox.io/s/qvyyyvv346?file=/src/index.js:945-1126
  const handleOnChangeKnob = (val, callback) => {
    // ignore change if distance is greater than defined
    // here we use a distance of 200 because our max value is 1000
    const maxDistance = 2
    // let distance = Math.abs(val - callback)
    // console.log(`val= ${val} knob ${callback} distance ${distance}`)
    if (val > maxDistance) {
      return
    } else {
      callback(val)
    }
  }

  // const knobstyleDesktop = {
  //   width: "20vw",
  //   height: "20vh",
  // }

  // const knobstyleMobile = {
  //   width: "10vw",
  //   height: "10vh",
  // }
  return (
    <>
      <Knobs>
        {/* <Knob onChange={(val) => setKnob(val)} min={0} max={1} value={knob} /> */}
        <Knob
          // style={
          //   props.env.isTabletOrMobileDevice
          //     ? knobstyleDesktop
          //     : knobstyleMobile
          // }
          skin={skins.s16}
          // style={{ display: "inline-block" }}
          min={0}
          max={1}
          width={100}
          height={100}
          value={BirthdayManknob}
          onChange={(e) => handleOnChangeKnob(e, setBirthdayManKnob)}
          // onStart={() => setBirthdayManPlaying(!BirthdayManPlaying)}
        />
        <Knob
          skin={skins.s16}
          min={0}
          max={1}
          width={100}
          height={100}
          value={AlienManknob}
          onChange={(e) => handleOnChangeKnob(e, setAlienManKnob)}
          // onStart={() => setAlienManPlaying(!AlienManPlaying)}
        />
        <Knob
          skin={skins.s16}
          min={0}
          max={1}
          width={100}
          height={100}
          value={TankKnob}
          onChange={(e) => handleOnChangeKnob(e, setTankKnob)}
          // onStart={() => setTankPlaying(!TankPlaying)}
        />
        <Knob
          skin={skins.s16}
          min={0}
          max={1}
          width={100}
          height={100}
          value={EatCarManknob}
          onChange={(e) => handleOnChangeKnob(e, setEatCarManKnob)}
          // onStart={() => setEatCarManPlaying(!EatCarManPlaying)}
        />
      </Knobs>

      <Title>
        <img alt="white" src={`${URLBase}pyngyttextwhite.png`} />
      </Title>

      <BirthdayMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}bmanstill.png`}
          animatedGif={`${URLBase}bmananim.png`}
          sample={Rita1}
          loop={true}
          volume={BirthdayManknob}
          playing={BirthdayManPlaying}
        />
      </BirthdayMan>

      <AlienMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}amanstill.png`}
          animatedGif={`${URLBase}amananim.png`}
          sample={Rita2}
          loop={true}
          volume={AlienManknob}
          playing={AlienManPlaying}
        />
      </AlienMan>
      <Tank>
        <AnimatedFigure
          stillGifFrame={`${URLBase}tankstill.png`}
          animatedGif={`${URLBase}tankanim.png`}
          sample={Rita3}
          loop={true}
          volume={TankKnob}
          playing={TankPlaying}
        />
      </Tank>
      <EatCarMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}ecmstill.png`}
          animatedGif={`${URLBase}ecmanim.png`}
          sample={Rita4}
          loop={true}
          volume={EatCarManknob}
          playing={EatCarManPlaying}
        />
      </EatCarMan>
    </>
  )
}
