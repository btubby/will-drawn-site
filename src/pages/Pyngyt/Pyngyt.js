import React from "react"
import PyngytContent from "./PyngytContent"

export const URLBase = "http://www.tubbycreative.com/drawnwebsite/"

export function Pyngyt() {
  return (
    <div className="PbodyBackground">
      <div className="PBackground">
        <PyngytContent />
      </div>
    </div>
  )
}
