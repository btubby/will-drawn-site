import React from "react"
import Button from "@material-ui/core/Button"
import * as Tone from "tone"

export default function ToneButtons() {
  const handleClickPlayNote = (note, duration) => {
    const synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease(note, duration)
  }
  return (
    <div>
      <Button onClick={() => handleClickPlayNote("C4", "8t")}>
        C, eighth-note triplet
      </Button>
      <Button onClick={() => handleClickPlayNote("D4", "8t")}>
        D, eighth-note triplet
      </Button>
      <Button onClick={() => handleClickPlayNote("E4", "8t")}>
        E, eighth-note triplet
      </Button>
      <Button onClick={() => handleClickPlayNote("F4", "8t")}>
        F, eighth-note triplet
      </Button>
      <br />
      <Button onClick={() => handleClickPlayNote("C4", "8n")}>
        C, 1/8th note
      </Button>
      <Button onClick={() => handleClickPlayNote("D4", "8n")}>
        D, 1/8th note
      </Button>
      <Button onClick={() => handleClickPlayNote("E4", "8n")}>
        E, 1/8th note
      </Button>
      <Button onClick={() => handleClickPlayNote("F4", "8n")}>
        F, 1/8th note
      </Button>
      <br />
      <Button onClick={() => handleClickPlayNote("C4", "4n")}>
        C, 1/4th note
      </Button>
      <Button onClick={() => handleClickPlayNote("D4", "4n")}>
        D, 1/4th note
      </Button>
      <Button onClick={() => handleClickPlayNote("E4", "4n")}>
        E, 1/4th note
      </Button>
      <Button onClick={() => handleClickPlayNote("F4", "4n")}>
        F, 1/4th note
      </Button>
    </div>
  )
}
