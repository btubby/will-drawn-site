import React, { useState } from "react"
import styled from "styled-components"
import AnimatedFigure from "../components/AnimatedFigure"

const FigureOne = styled.div`
  position: absolute;
  top: 100vw;
  left: 50vw;
  width: 25%;
`
const FigureTwo = styled.div`
  position: absolute;
  top: 47vw;
  left: 13vw;
  width: 15%;
`

const BodyBefore = styled.div`
  &:after {
    content: "";
    display: block;
    z-index: -1;
    height: 0;
    /* height / width = ratio% */
    /* 2853px / 869px = 328.3084% */
    padding-bottom: 328.3084%;
    padding-bottom: calc(2853 / 869 * 100%);
    background: url("http://www.tubbycreative.com/drawnwebsite/pyngytbkgnd.jpg")
      center top / 100% auto no-repeat;
  }
`

export function Pyngyt() {
  return (
    <BodyBefore>
      <FigureOne>
        <AnimatedFigure
          stillGifFrame={
            "http://www.tubbycreative.com/drawnwebsite/tankstill.png"
          }
          animatedGif={"http://www.tubbycreative.com/drawnwebsite/tank.gif"}
        />
      </FigureOne>
      <FigureTwo>
        <AnimatedFigure
          stillGifFrame={
            "http://www.tubbycreative.com/drawnwebsite/Taiwanmanstill.png"
          }
          animatedGif={
            "http://www.tubbycreative.com/drawnwebsite/taiwanman.gif"
          }
        />
      </FigureTwo>
    </BodyBefore>
  )
}
