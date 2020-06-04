import React from "react"
import AnimatedFigure from "../../components/AnimatedFigure"
import {
  BirthdayMan,
  AlienMan,
  Tank,
  EatCarMan,
  VolumeSlider,
} from "./pyngytStyles"
import { URLBase } from "./Pyngyt"

// @ts-ignore
import Rita1 from "../../audio/rita1.wav"
// @ts-ignore
import Rita2 from "../../audio/rita2.wav"
// @ts-ignore
import Rita3 from "../../audio/rita3.wav"
// @ts-ignore
import Rita4 from "../../audio/rita4.wav"
import { Typography, makeStyles, withStyles } from "@material-ui/core"

import Slider from "@material-ui/core/Slider"

const useStyles = makeStyles({
  root: {
    height: 300,
  },
})

export default function () {
  const [value, setValue] = React.useState(0.1)
  const classes = useStyles()

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8,
    },
    // thumb: {
    //   height: 24,
    //   width: 24,
    //   backgroundColor: "#fff",
    //   border: "2px solid currentColor",
    //   marginTop: -8,
    //   marginLeft: -12,
    //   "&:focus, &:hover, &$active": {
    //     boxShadow: "inherit",
    //   },
    // },
    // active: {},
    // valueLabel: {
    //   left: "calc(-50% + 4px)",
    // },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider)

  return (
    <>
      <BirthdayMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}bmanstill.png`}
          animatedGif={`${URLBase}bmananim.png`}
          sample={Rita1}
          loop={true}
          volume={value}
        />
        <VolumeSlider>
          {/* <Typography id="vertical-slider" gutterBottom>
            VOLUME
          </Typography> */}

          <div className={classes.root}>
            <Slider
              // orientation="vertical"
              onChange={(event, newValue) => {
                console.log(`Slider change ${newValue}`)
                setValue(newValue)
                // setValue(newValue)
                // benPlayerRef.current.seek(newValue)
              }}
              defaultValue={0.1}
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
            />
          </div>
        </VolumeSlider>
      </BirthdayMan>

      <AlienMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}amanstill.png`}
          animatedGif={`${URLBase}amananim.png`}
          sample={Rita2}
          loop={true}
          volume={1}
        />
      </AlienMan>
      <Tank>
        <AnimatedFigure
          stillGifFrame={`${URLBase}tankstill.png`}
          animatedGif={`${URLBase}tankanim.png`}
          sample={Rita3}
          loop={true}
        />
      </Tank>
      <EatCarMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}ecmstill.png`}
          animatedGif={`${URLBase}ecmanim.png`}
          sample={Rita4}
          loop={true}
        />
      </EatCarMan>
    </>
  )
}
