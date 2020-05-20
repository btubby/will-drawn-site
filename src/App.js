import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Krambrodru } from "./pages/Krambrodru/Krambrodru"
import { Pyngyt } from "./pages/Pyngyt/Pyngyt"

import { App as ToneReact } from "./pages/ToneReact"
import PianoHandDrawn from "./pages/PianoHandDrawn/PianoHandDrawn"
import Theramin from "./components/Theramin"

import SideBar from "./components/SideBar"
import "./components/burger-styles.css"

import { useMediaQuery } from "react-responsive"
import Synth from "./components/Synth/Synth"
import styled from "styled-components"
import Trails from "./components/Trails/Trails"

const BurgerWrapper = styled.div`
  display: relative;
  top: 1px;
  left: 1px;
  width: 8vw;
`
function App() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1224px)",
  // })
  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" })
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  })
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })

  return (
    <div id="App">
      {/* <div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && (
          <>
          <p>You are a desktop or laptop</p>
          {isBigScreen && <p>You also have a huge screen</p>}
          {isTabletOrMobile && (
            <p>You are sized like a tablet or mobile phone though</p>
            )}
            </>
            )}
            {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
            <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
            {isRetina && <p>You are retina</p>}
          </div> */}
      <BurgerWrapper>
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          isTabletOrMobileDevice={isTabletOrMobileDevice}
        />
        {/* <img src={Burger} /> */}
      </BurgerWrapper>
      <main id="page-wrap">
        <Router>
          <Route exact path="/">
            <Pyngyt />
          </Route>
          <Route exact path="/Krambrodru/">
            <Krambrodru />
          </Route>
          <Route exact path="/tone/">
            <ToneReact />
          </Route>
          <Route exact path="/theramin/">
            <Theramin />
          </Route>
          <Route exact path="/keys/">
            <PianoHandDrawn />
          </Route>{" "}
          <Route exact path="/synth/">
            <Synth />
          </Route>
          <Route exact path="/trails/">
            <Trails />
          </Route>
        </Router>
      </main>
    </div>
  )
}
export default App
