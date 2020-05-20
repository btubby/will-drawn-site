import React from "react"
import GifPlayer from "react-gif-player"
import ReactHowler from "react-howler"
import DefaultLoader from "../assets/loader.jpg"

//https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.js
import raf from "raf" // requestAnimationFrame polyfill

export default class AnimatedFigure extends React.Component {
  // on click, toggle the state of the animation AND the sound
  constructor(props) {
    super(props)
    this.state = {
      playing: this.props.playOnLoad,
      loading: false,
      sampleloading: true,
    }
  }

  HowlerhandleOnLoad = () => {
    console.log("sample loaded")
    this.setState({ sampleloading: false })
  }
  HowlerhandleOnEnd = () => {
    // console.log("sample ended")
    if (!this.props.loop) {
      this.setState({ playing: false })
      console.log("gif pausing")
      this.pauseGif()
    }
  }
  HowlerhandleOnPlay = () => {
    this.renderSeekPos()
  }
  renderSeekPos = () => {
    this.setState({ seek: this.player.seek() })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  GifPlayerHandlePlayToggle = () => {
    const newState = !this.state.playing
    console.log(
      `${this.props.animation} GifPlayerHandlePlayToggle -> ${this.state.playing} -> ${newState}`
    )
    this.setState({ playing: newState })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playOnLoad !== nextProps.playOnLoad) {
      this.GifPlayerHandlePlayToggle()

      // FIXME THIS SHOULD BE CONDITIONAL
      if (this.props.playOnLoad === false) {
        this.pauseGif()
      } else {
        // play the damn gif
        this.setState({ playing: true })
      }
    }
  }

  render() {
    const {
      loader = DefaultLoader,
      animatedGif,
      loop = true,
      playOnLoad = true,
      stillGifFrame,
      volume = 1,
      sample = "http://goldfirestudios.com/proj/howlerjs/sound.ogg",
    } = this.props

    return this.state.loading ? (
      <div className="aninated-figure-loader-comtainer">
        <img id="aninated-figure-loader" alt="" src={loader} />
      </div>
    ) : (
      <div>
        <ReactHowler
          src={sample}
          playing={loop ? true : this.state.playing}
          volume={volume}
          mute={!this.state.playing}
          loop={loop}
          preload={true}
          onLoad={this.HowlerhandleOnLoad}
          onPlay={this.HowlerhandleOnPlay}
          // onStop={this.HowlerhandleOnStop}
          onEnd={this.HowlerhandleOnEnd}
          ref={(ref) => (this.player = ref)}
        />
        <GifPlayer
          //  gif={this.state.loading ? Loader : this.props.animation }
          gif={
            this.state.sampleloading
              ? loader
              : this.state.playing
              ? animatedGif
              : stillGifFrame
          }
          still={stillGifFrame}
          width={this.props.width}
          onClick={this.GifPlayerHandlePlayToggle}
          pauseRef={(pause) => (this.pauseGif = pause)}
          autoplay={playOnLoad}
        />
      </div>
    )
  }
}
