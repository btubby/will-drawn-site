import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    /* align-items: center; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    /* transition: all 0.25s linear; */
  }

  .trails-box {
    cursor: pointer;
    position: relative;
    width: 50%;
    height: 20%;
    background-color: ${({ theme }) => theme.trails};
    /* background-color: #fed134; */
    will-change: transform;
  }
  .bm-burger-button {
    filter: ${({ theme }) => theme.bmBurgerButton};
  }

  .bm-menu{
    background: ${({ theme }) => theme.bmMenuBackgroundColor};
  }
  .bm-item{
    color: ${({ theme }) => theme.bmItemColor};
  }
  img {
    filter: ${({ theme }) => theme.bmBurgerButton};
  }

  .PbodyBackground {
    background-color: #b8ada3;
    filter: ${({ theme }) => theme.bmBurgerButton};
    -webkit-filter: ${({ theme }) => theme.bmBurgerButton};
  }



  .PBackground {
    content: "";
    display: block;
    z-index: -1;
    height: 0;
    padding-bottom: 100%;
    background: #000 url("http://www.tubbycreative.com/drawnwebsite/pyngytbkgnd.png") center center / 100% auto no-repeat;

    /* background-color
background-image
background-position
background-size
background-repeat
background-origin
background-clip
background-attachment */


    background-attatchment: fixed;

  }
  .PBackground2 {
    content: "";
    display: block;
    z-index: -1;
    height: 0;
    padding-bottom: 100%;
    /* background-attatchment: fixed; */
    background-color: #000;
    background-image: url("http://www.tubbycreative.com/drawnwebsite/pyngytbkgnd.png");
    background-position:  center center / 100%;
    background-repeat: no-repeat;
    background-size: auto;
  }




.KBackground {
  content: "";
    display: block;
    z-index: -1;
    height: 0;
    padding-bottom: 100%;
    background: #000 url("http://www.tubbycreative.com/drawnwebsite/krambrodrubkgnd.png")
      center top / 100% auto no-repeat;
}

  `
