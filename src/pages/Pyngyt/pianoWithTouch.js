// import { PianoContainer } from "./pyngytStyles"

// <PianoContainer>
//   {/* https://www.npmjs.com/package/image-map */}
//   <img
//     src="http://www.tubbycreative.com/drawnwebsite/keyscontrols.png"
//     useMap="#image-map"
//     alt="DrawnPiano"
//   />
//   <map name="image-map">
//     <area
//       target=""
//       alt="r1"
//       title="r1"
//       onClick={() => {
//         console.log("click1")
//       }}
//       coords="490,756,382,657"
//       shape="rect"
//     />
//     <area
//       target=""
//       alt="c1"
//       title="c1"
//       onClick={() => {
//         console.log("click2")
//       }}
//       coords="448,535,45"
//       shape="circle"
//     />
//     <area
//       target=""
//       alt="c2"
//       title="c2"
//       onClick={() => {
//         console.log("click3")
//       }}
//       coords="642,556,50"
//       shape="circle"
//     />
//     <area
//       target=""
//       alt="C"
//       title="C"
//       onMouseDown={(e) => {
//         console.log("key1 down")
//         synth.current.triggerAttack("c4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key1 up")
//         synth.current.triggerRelease()
//       }}
//       coords="558,702,853,653,889,684,713,729,740,792,645,845"
//       shape="poly"
//     />

//     <area
//       target=""
//       alt="C#"
//       title="C#"
//       onMouseDown={(e) => {
//         console.log("key2 down")
//         synth.current.triggerAttack("c#4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key2 up")
//         synth.current.triggerRelease()
//       }}
//       coords="729,754,752,781,971,719,959,686,922,676,723,741"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="D"
//       title="D"
//       onMouseDown={(e) => {
//         console.log("key3 down")
//         synth.current.triggerAttack("d4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key3 up")
//         synth.current.triggerRelease()
//       }}
//       coords="666,866,732,942,822,941,873,896,840,863,981,744,961,730"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="D#"
//       title="D#"
//       onMouseDown={(e) => {
//         console.log("key4 down")
//         synth.current.triggerAttack("d#4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key4 up")
//         synth.current.triggerRelease()
//       }}
//       coords="856,866,927,912,1078,752,1076,729,1034,705"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="E"
//       title="E"
//       onMouseDown={(e) => {
//         console.log("key5 down")
//         synth.current.triggerAttack("e4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key5 up")
//         synth.current.triggerRelease()
//       }}
//       coords="925,944,1110,944,1171,773,1095,752"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="F"
//       title="F"
//       onMouseDown={(e) => {
//         console.log("key6 down")
//         synth.current.triggerAttack("f4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key6 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1139,946,1261,939,1264,780,1179,778"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="F#"
//       title="F#"
//       onMouseDown={(e) => {
//         console.log("key7 down")
//         synth.current.triggerAttack("f#4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key7 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1278,749,1339,751,1378,939,1267,941"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="G"
//       title="G"
//       onMouseDown={(e) => {
//         console.log("key8 down")
//         synth.current.triggerAttack("g4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key8 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1347,771,1398,768,1586,944,1384,937"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="G#"
//       title="G#"
//       onMouseDown={(e) => {
//         console.log("key9 down")
//         synth.current.triggerAttack("g#4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key9 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1406,756,1406,735,1450,725,1616,817,1632,895,1583,927"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="A"
//       title="A"
//       onMouseDown={(e) => {
//         console.log("key10 down")
//         synth.current.triggerAttack("a4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key10 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1586,934,1640,908,1635,827,1498,741,1540,729,1730,813,1766,790,1888,844,1772,944"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="A#"
//       title="A#"
//       onMouseDown={(e) => {
//         console.log("key11 down")
//         synth.current.triggerAttack("a#4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key11 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1523,717,1516,681,1540,666,1742,715,1796,761,1725,808"
//       shape="poly"
//     />
//     <area
//       target=""
//       alt="B"
//       title="B"
//       onMouseDown={(e) => {
//         console.log("key12 down")
//         synth.current.triggerAttack("b4")
//       }}
//       onMouseUp={(e) => {
//         console.log("key12 up")
//         synth.current.triggerRelease()
//       }}
//       coords="1777,783,1808,758,1755,717,1581,666,1603,632,1911,649,1916,830"
//       shape="poly"
//     />
//   </map>
// </PianoContainer>
