import React from "react"
import { slide as Menu } from "react-burger-menu"

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        PYNGYT
      </a>

      <a className="menu-item" href="/tone">
        TONE EXPERIMENTS
      </a>

      <a className="menu-item" href="/keys">
        KEYS
      </a>

      <a className="menu-item" href="/theramin">
        THERAMIN
      </a>
    </Menu>

    /* <Menu pageWrapId={"page-wrap"}>
<a id="PYNGYT" className="menu-item" href="/">
  PYNGYT
</a>
<b />
<a id="TONE_EXPERIMENTS" className="menu-item" href="/tone/">
  
</a>
<b />
<a id="KEYS" className="menu-item" href="/keys">
  KEYS
</a>
<b />
<a id="KEYS" className="menu-item" href="/keys">
  THERAMIN
</a>
</Menu> */
  )
}
