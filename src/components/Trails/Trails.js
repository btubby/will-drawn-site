import React from "react"
import { useTrail, animated } from "react-spring"
import "../styles.css"

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

export default function Trails() {
  const [toggle, setToggle] = React.useState(true)
  const trail = useSimpleTrail(toggle)

  return (
    <div
      style={{
        backgroundColor: "tomato",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {trail.map(({ x, opacity }) => (
        <animated.div
          className="box"
          onClick={() => setToggle((toggle) => !toggle)}
          style={{
            opacity,
            transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
          }}
        />
      ))}
    </div>
  )
}
