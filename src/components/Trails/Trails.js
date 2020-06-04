import React from "react"
import { useTrail, animated } from "react-spring"
import "./trailStyles.css"
import styled from "styled-components"

import { GlobalStyles } from "../../global"

const items = ["item1", "item2", "item3", "item4", "item5", "item6"]

// from reactEurope 2020 https://www.youtube.com/watch?list=PLCC436JpVnK31LZG2cNINhlEQ1KTm39BR&time_continue=26&v=41Ia291KIvI&feature=emb_logo
// Custom hook
const useSimpleTrail = (toggle) => {
  return useTrail(items.length, {
    from: { opacity: 0, x: -100 },
    opacity: toggle ? 1 : 0.25,
    x: toggle ? 0 : 100,
  })
}
const MyContainer = styled.div`
  display: block;
  height: 1200px;
`
export default function Trails() {
  const [toggle, setToggle] = React.useState(true)
  const trail = useSimpleTrail(toggle)

  return (
    <MyContainer>
      <GlobalStyles />
      <div
        style={{
          backgroundColor: "#666666",
          position: "relative",
          width: "auto",
          height: "100%",
        }}
      >
        {trail.map(({ x, opacity }) => (
          <animated.div
            className="trails-box"
            onClick={() => setToggle((toggle) => !toggle)}
            style={{
              opacity,
              transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
            }}
          />
        ))}
      </div>
    </MyContainer>
  )
}
