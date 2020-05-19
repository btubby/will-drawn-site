import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Krambrodru } from "./components/Krambrodru"
import { Pyngyt } from "./pages/Pyngyt/Pyngyt"
import { styles, Burger, Main } from "./AppStyles"

import { App as ToneReact } from "./pages/ToneReact"
import { stack as Menu } from "react-burger-menu"
import PianoHandDrawn from "./pages/PianoHandDrawn/PianoHandDrawn"
import Theramin from "./components/Theramin"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div id="App">
      {/* <Burger>
        <img
          src={"http://www.tubbycreative.com/drawnwebsite/burgermenu.png"}
          className="App-logo"
          alt="logo"
        />
      </Burger> */}

      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <main id="page-wrap">
        <Router>
          <Main>
            <Route path="/" exact component={Pyngyt} />
            <Route path="/Krambrodru/" component={Krambrodru} />
            <Route path="/tone/" component={ToneReact} />
            <Route path="/theramin/" component={Theramin} />
            <Route path="/keys/" component={PianoHandDrawn} />
          </Main>
        </Router>
      </main>
    </div>
  )
}

export default App
