import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Krambrodru } from "./pages/Krambrodru/Krambrodru"
import { Pyngyt } from "./pages/Pyngyt/Pyngyt"
import P5 from "./pages/P5/P5"

import { App as ToneReact } from "./pages/ToneReact"
import Theramin from "./components/Theramin"

import SideBar from "./components/SideBar"
import "./components/burger-styles.css"

import { useMediaQuery } from "react-responsive"
import Synth from "./components/Synth/Synth"
import styled from "styled-components"
import Trails from "./components/Trails/Trails"
import StepSequencer from "./components/StepSequencer/StepSequencer"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"

import Switch from "@material-ui/core/Switch"
const BurgerWrapper = styled.div`
  display: relative;
  top: 1px;
  left: 1px;
  /* width: 8vw; */
`
export const SwitchContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  })
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })

  // let breakpoint = useMediaPredicate("(min-width: 600px)") ? "medium" : "small"

  const [theme, setTheme] = useState("light")

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark")
      // otherwise, it should be light
    } else {
      setTheme("light")
    }
  }
  const env = {
    isDesktopOrLaptop: isDesktopOrLaptop,
    isTabletOrMobile: isTabletOrMobile,
    isPortrait: isPortrait,
    isRetina: isRetina,
  }
  console.log(`isDesktopOrLaptop: ${isDesktopOrLaptop}`)
  console.log(`isBigScreen: ${isBigScreen}`)
  console.log(`isTabletOrMobile: ${isTabletOrMobile}`)
  console.log(`isPortrait: ${isPortrait}`)
  console.log(`isRetina: ${isRetina}`)
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <div id="App">
        <GlobalStyles />

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
              <Pyngyt env={env} />
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
            <Route exact path="/seq/">
              <StepSequencer />
            </Route>
            <Route exact path="/synth/">
              <Synth />
            </Route>
            <Route exact path="/trails/">
              <Trails />
            </Route>
            <Route exact path="/p5/">
              <P5 />
            </Route>
          </Router>
        </main>
        {/* <button onClick={toggleTheme}>Dark Mode</button> */}
        <SwitchContainer>
          <Switch
            // checked={state.checkedA}
            onChange={toggleTheme}
            name="checkedA"
            width="0.7vw"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </SwitchContainer>
      </div>
    </ThemeProvider>
  )
}
export default App
