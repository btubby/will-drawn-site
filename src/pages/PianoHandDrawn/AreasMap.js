import React from "react"

export const areasMap = {
  name: "myMap",
  areas: [
    {
      _id: "key1",
      shape: "poly",
      coords: [
        290, //x
        367, //y top left
        320, //x
        420, // ybottom left
        320, // x
        420, // y
        380,
        410,
        440,
        330,
      ],
      preFillColor: "tomato",
    },
    {
      _id: "rectangleButton1",
      shape: "rect",
      preFillColor: "green",
      coords: [
        200, // BOTTOM LEFT
        390, // top left Y BOTTOM
        260, // topleft X
        340, // bottom right Y
      ],
    },
    {
      _id: "circleButton1",
      shape: "circle",
      // preFillColor: "red",
      coords: [
        240, // centreX
        280, // tcentreY
        26, // RADIUS
      ],
    },
    {
      _id: "circleButton2",
      shape: "circle",
      preFillColor: "blue",
      coords: [
        335, // centreX
        290, // tcentreY
        24, // RADIUS
      ],
    },
    // {
    //   _id: "keyLeft1",
    //   shape: "poly",
    //   preFillColor: "yellow",
    //   strokeColor: "#0000ff",
    //   coords: [
    //     350,
    //     470, // x,y
    //     430,
    //     340, // x,y
    //     500,
    //     390, // x,y
    //     200,
    //     390, // x,y
    //   ],
    //   lineWidth: 1,
    // },
  ],
}

export default function AreasMap() {
  return <div></div>
}
