import React from 'react'
// images
import grid from "../../images/code_grid.png"
import flex from "../../images/code_flex.png";
import gridFlex from "../../images/code_grid_flex.png";

export default function Center() {
  return (
    <>
    <div className="codeImg">
     <h2>Center Div</h2>
      <h3>Using Grid</h3>
      <img src={grid} alt="" />

      <h3>Using Flex</h3>
      <img src={flex} alt="" />

      <h3>Using without Grid or Flex</h3>
      <img src={gridFlex} alt="" />
    </div>
    </>
  )
}

