import React from "react"
import AnimatedFigure from "../../components/AnimatedFigure"
import { URLBase } from "../Pyngyt/Pyngyt"
// @ts-ignore
import uf1 from "../../audio/uf1.wav"
// @ts-ignore
import uf2 from "../../audio/uf2.wav"
// @ts-ignore
import uf3 from "../../audio/uf3.wav"
// @ts-ignore
import uf4 from "../../audio/uf4.wav"
// @ts-ignore
import uf5 from "../../audio/uf5.wav"

import { CowParsley, ArmMan, Planet, CMonster, Man } from "./Krambrodru.styles"

export function Krambrodru() {
  return (
    <div className="PbodyBackground">
      <div className="KBackground">
        <>
          <ArmMan>
            <AnimatedFigure
              stillGifFrame={`${URLBase}armmanstill.png`}
              animatedGif={`${URLBase}armmananim.png`}
              sample={uf1}
              loop={true}
            />
          </ArmMan>
          <CowParsley>
            <AnimatedFigure
              stillGifFrame={`${URLBase}cowparsleystill.png`}
              animatedGif={`${URLBase}cowparsleyanim.png`}
              sample={uf2}
              loop={true}
            />
          </CowParsley>
          <Planet>
            <AnimatedFigure
              stillGifFrame={`${URLBase}planetstill.png`}
              animatedGif={`${URLBase}planetanim.png`}
              sample={uf3}
              loop={true}
            />
          </Planet>
          <CMonster>
            <AnimatedFigure
              stillGifFrame={`${URLBase}cmonsterstill.png`}
              animatedGif={`${URLBase}cmonsteranim.png`}
              sample={uf4}
              loop={true}
            />
          </CMonster>
          <Man>
            <AnimatedFigure
              stillGifFrame={`${URLBase}manstill.png`}
              animatedGif={`${URLBase}mananim.png`}
              sample={uf5}
              loop={true}
            />
          </Man>
        </>
      </div>
    </div>
  )
}
