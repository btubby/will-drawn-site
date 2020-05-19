import React from "react"
// @ts-ignore
import styled from "styled-components"
import AnimatedFigure from "../../components/AnimatedFigure"
// @ts-ignore
import Synth from "../../audio/synth.wav"
// @ts-ignore
import Coco from "../../audio/coco.wav"
// @ts-ignore
import String from "../../audio/string.wav"
// @ts-ignore
import Melo from "../../audio/melo.wav"
import { Tank, BirthdayMan, AlienMan, EatCarMan } from "./pyngytStyles"

const URLBase = "http://www.tubbycreative.com/drawnwebsite/"

export function Pyngyt() {
  return (
    <>
      {/* // amanstill.png is alien man, top right // bman is birthday man top left
      // ecm is Eat car man, bottom right // tank is a tank, mid left */}
      <Tank>
        <AnimatedFigure
          stillGifFrame={`${URLBase}tankstill.png`}
          animatedGif={`${URLBase}tankanim.png`}
          sample={Synth}
        />
      </Tank>

      <BirthdayMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}bmanstill.png`}
          animatedGif={`${URLBase}bmananim.png`}
          sample={Coco}
        />
      </BirthdayMan>

      <AlienMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}amanstill.png`}
          animatedGif={`${URLBase}aman.png`}
          sample={String}
        />
      </AlienMan>

      <EatCarMan>
        <AnimatedFigure
          stillGifFrame={`${URLBase}ecmstill.png`}
          animatedGif={`${URLBase}ecmanim.png`}
          sample={Melo}
        />
      </EatCarMan>
    </>
  )
}