import React from "react"
import { fallDown as Menu } from "react-burger-menu"

import { Box } from "@material-ui/core"

export default (props) => {
  return (
    <>
      <Menu {...props}>
        {/* <div style={{ width: "100%" }}> */}
        <a className="menu-item" href="/">
          <img src={"http://www.tubbycreative.com/drawnwebsite/world1.png"} />
        </a>
        <a className="menu-item" href="/krambrodru">
          <img src={"http://www.tubbycreative.com/drawnwebsite/world2.png"} />
        </a>
        <a className="menu-item" href="/krambrodru">
          <img src={"http://www.tubbycreative.com/drawnwebsite/world3.png"} />
        </a>
        <a className="menu-item" href="/krambrodru">
          <img src={"http://www.tubbycreative.com/drawnwebsite/world4.png"} />
        </a>
        <a className="menu-item" href="/theramin">
          THERAMIN
        </a>
        <a className="menu-item" href="/tone">
          TONE EXPERIMENTS
        </a>
        <a className="menu-item" href="/synth">
          SYNTH EXPERIMENTS
        </a>
        <a className="menu-item" href="/trails">
          Trails
        </a>
        <a className="menu-item" href="/seq">
          STEP SEQUENCER
        </a>
        <a className="menu-item" href="/p5">
          p5 experiments
        </a>

        {/* <button onClick={toggleTheme}>Dark Mode</button> */}
        <Box display="flex" alignContent="flex-end" flexWrap="wrap"></Box>
        {/* </div> */}
      </Menu>
    </>
  )
}
