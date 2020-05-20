import React, { useRef, useEffect } from "react"
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
import * as Tone from "tone"

const Main = styled.div`
  display: flex;
`
const PianoContainer = styled.div`
  position: absolute;
  top: 70vw;
  left: 0px;
  object-fit: cover;
`
const BodyBefore = styled.div`
  /* background-color: 9c8f8b; */
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
  const synth = useRef(null)

  useEffect(() => {
    synth.current = new Tone.Synth()
    synth.current.oscillator.type = "sine"
    synth.current.toMaster()
  })

  return (
    <>
      <BodyBefore>
        <Main>
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
              animatedGif={`${URLBase}amananim.png`}
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
          <PianoContainer>
            {/* <img src="http://www.tubbycreative.com/drawnwebsite/keyscontrols.png" /> */}

            <img
              src="http://www.tubbycreative.com/drawnwebsite/keyscontrols.png"
              useMap="#image-map"
              alt="DrawnPiano"
            />

            <map name="image-map">
              <area
                target=""
                alt="r1"
                title="r1"
                onClick={() => {
                  console.log("click1")
                }}
                coords="490,756,382,657"
                shape="rect"
              />
              <area
                target=""
                alt="c1"
                title="c1"
                onClick={() => {
                  console.log("click2")
                }}
                coords="448,535,45"
                shape="circle"
              />
              <area
                target=""
                alt="c2"
                title="c2"
                onClick={() => {
                  console.log("click3")
                }}
                coords="642,556,50"
                shape="circle"
              />
              <area
                target=""
                alt="C"
                title="C"
                onMouseDown={(e) => {
                  console.log("key1 down")
                  synth.current.triggerAttack("c4")
                }}
                onMouseUp={(e) => {
                  console.log("key1 up")
                  synth.current.triggerRelease()
                }}
                coords="558,702,853,653,889,684,713,729,740,792,645,845"
                shape="poly"
              />

              <area
                target=""
                alt="C#"
                title="C#"
                onMouseDown={(e) => {
                  console.log("key2 down")
                  synth.current.triggerAttack("c#4")
                }}
                onMouseUp={(e) => {
                  console.log("key2 up")
                  synth.current.triggerRelease()
                }}
                coords="729,754,752,781,971,719,959,686,922,676,723,741"
                shape="poly"
              />
              <area
                target=""
                alt="D"
                title="D"
                onMouseDown={(e) => {
                  console.log("key3 down")
                  synth.current.triggerAttack("d4")
                }}
                onMouseUp={(e) => {
                  console.log("key3 up")
                  synth.current.triggerRelease()
                }}
                coords="666,866,732,942,822,941,873,896,840,863,981,744,961,730"
                shape="poly"
              />
              <area
                target=""
                alt="D#"
                title="D#"
                onMouseDown={(e) => {
                  console.log("key4 down")
                  synth.current.triggerAttack("d#4")
                }}
                onMouseUp={(e) => {
                  console.log("key4 up")
                  synth.current.triggerRelease()
                }}
                coords="856,866,927,912,1078,752,1076,729,1034,705"
                shape="poly"
              />
              <area
                target=""
                alt="E"
                title="E"
                onMouseDown={(e) => {
                  console.log("key5 down")
                  synth.current.triggerAttack("e4")
                }}
                onMouseUp={(e) => {
                  console.log("key5 up")
                  synth.current.triggerRelease()
                }}
                coords="925,944,1110,944,1171,773,1095,752"
                shape="poly"
              />
              <area
                target=""
                alt="F"
                title="F"
                onMouseDown={(e) => {
                  console.log("key6 down")
                  synth.current.triggerAttack("f4")
                }}
                onMouseUp={(e) => {
                  console.log("key6 up")
                  synth.current.triggerRelease()
                }}
                coords="1139,946,1261,939,1264,780,1179,778"
                shape="poly"
              />
              <area
                target=""
                alt="F#"
                title="F#"
                onMouseDown={(e) => {
                  console.log("key7 down")
                  synth.current.triggerAttack("f#4")
                }}
                onMouseUp={(e) => {
                  console.log("key7 up")
                  synth.current.triggerRelease()
                }}
                coords="1278,749,1339,751,1378,939,1267,941"
                shape="poly"
              />
              <area
                target=""
                alt="G"
                title="G"
                onMouseDown={(e) => {
                  console.log("key8 down")
                  synth.current.triggerAttack("g4")
                }}
                onMouseUp={(e) => {
                  console.log("key8 up")
                  synth.current.triggerRelease()
                }}
                coords="1347,771,1398,768,1586,944,1384,937"
                shape="poly"
              />
              <area
                target=""
                alt="G#"
                title="G#"
                onMouseDown={(e) => {
                  console.log("key9 down")
                  synth.current.triggerAttack("g#4")
                }}
                onMouseUp={(e) => {
                  console.log("key9 up")
                  synth.current.triggerRelease()
                }}
                coords="1406,756,1406,735,1450,725,1616,817,1632,895,1583,927"
                shape="poly"
              />
              <area
                target=""
                alt="A"
                title="A"
                onMouseDown={(e) => {
                  console.log("key10 down")
                  synth.current.triggerAttack("a4")
                }}
                onMouseUp={(e) => {
                  console.log("key10 up")
                  synth.current.triggerRelease()
                }}
                coords="1586,934,1640,908,1635,827,1498,741,1540,729,1730,813,1766,790,1888,844,1772,944"
                shape="poly"
              />
              <area
                target=""
                alt="A#"
                title="A#"
                onMouseDown={(e) => {
                  console.log("key11 down")
                  synth.current.triggerAttack("a#4")
                }}
                onMouseUp={(e) => {
                  console.log("key11 up")
                  synth.current.triggerRelease()
                }}
                coords="1523,717,1516,681,1540,666,1742,715,1796,761,1725,808"
                shape="poly"
              />
              <area
                target=""
                alt="B"
                title="B"
                onMouseDown={(e) => {
                  console.log("key12 down")
                  synth.current.triggerAttack("b4")
                }}
                onMouseUp={(e) => {
                  console.log("key12 up")
                  synth.current.triggerRelease()
                }}
                coords="1777,783,1808,758,1755,717,1581,666,1603,632,1911,649,1916,830"
                shape="poly"
              />
            </map>

            {/* <ImageMapper
              src={"http://www.tubbycreative.com/drawnwebsite/keyscontrols.png"}
              map={areasMap}
              width={2000}
              // onLoad={() => this.load()}
              onClick={(area) => {
                console.log(area._id)
              }}
              // onMouseEnter={(area) => this.enterArea(area)}
              // onMouseLeave={(area) => this.leaveArea(area)}
              // onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              // onImageClick={(evt) => this.clickedOutside(evt)}
              // onImageMouseMove={(evt) => this.moveOnImage(evt)}
            /> */}
          </PianoContainer>
        </Main>
      </BodyBefore>
    </>
  )
}
