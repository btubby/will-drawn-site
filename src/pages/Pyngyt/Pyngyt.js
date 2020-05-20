import React from "react"
import AnimatedFigure from "../../components/AnimatedFigure"
// @ts-ignore
import Synth from "../../audio/synth.wav"
// @ts-ignore
import Coco from "../../audio/coco.wav"
// @ts-ignore
import String from "../../audio/string.wav"
import Melo from "../../audio/melo.wav"
import { Tank, BirthdayMan, AlienMan, EatCarMan } from "./pyngytStyles"
import styled from "styled-components"

const BodyBefore = styled.div`
  background-color: 9c8f8b;
  &:after {
    content: "";
    display: block;
    z-index: -1;
    height: 0;
    /* height / width = ratio% */
    /* 2853px / 869px = 328.3084% */
    padding-bottom: 328.3084%;
    padding-bottom: calc(2853 / 869 * 100%);
    background: url("http://www.tubbycreative.com/drawnwebsite/pyngytbkgnd.png")
      center top / 100% auto no-repeat;
    background-color: #9c8f8b;
  }
`

export function Pyngyt() {
  const URLBase = "http://www.tubbycreative.com/drawnwebsite/"
  return (
    <BodyBefore>
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
    </BodyBefore>
  )
}
