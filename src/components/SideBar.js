import React from "react"
import { fallDown as Menu } from "react-burger-menu"

export default (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Pyngyt
      </a>
      <a className="menu-item" href="/krambrodru">
        KramBRODRU
      </a>

      <a className="menu-item" href="/keys">
        KEYS
      </a>
      <a className="menu-item" href="/theramin">
        THERAMIN
      </a>
      <a className="menu-item" href="/tone">
        TONE EXPERIMENTS
      </a>
    </Menu>
  )
}
