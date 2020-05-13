import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

import { Krambrodru } from "./components/Krambrodru"
import { Pyngyt } from "./components/Pyngyt"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Nav = styled.div`
  border: 1px solid red;
`
const Main = styled.div`
  border: 1px solid green;
`

function App() {
  let [color, setColor] = useState("#282c34")

  return (
    <>
      <Router>
        <Container>
          <Nav>
            <Link to="/">
              <Button color="primary">Pyngyt</Button>
            </Link>
            <Link to="/Krambrodru/" onClick={() => setColor("#007bff")}>
              <Button color="primary">Krambrodru</Button>
            </Link>
          </Nav>
          <Main>
            <Route path="/" exact component={Pyngyt} />
            <Route path="/Krambrodru/" component={Krambrodru} />
          </Main>
        </Container>
      </Router>
    </>
  )
}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

export default App
