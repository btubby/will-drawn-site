import React from "react"
import styled from "styled-components"
import AnimatedFigure from "../components/AnimatedFigure"

const Figure = styled.div`
  position: absolute;
  top: 95vw;
  left: 70vw;
  width: 20%;
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
    background: url("http://www.tubbycreative.com/drawnwebsite/krambrodrubkgnd.png")
      center top / 100% auto no-repeat;
  }
`
export function Krambrodru() {
  return (
    <BodyBefore>
      <Figure>
        <AnimatedFigure
          stillGifFrame={
            "http://www.tubbycreative.com/drawnwebsite/ecmwave.gif"
          }
          animatedGif={"http://www.tubbycreative.com/drawnwebsite/ecmwave.gif"}
        />
      </Figure>
    </BodyBefore>
  )
}
