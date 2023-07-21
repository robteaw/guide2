import React from 'react'
// images
import sass from "../../images/sass.png";
import sass2 from "../../images/sass2.png";
import sass_v from "../../images/sass-v.png";
import sass_v2 from "../../images/sass-v2.png";
import mixin from "../../images/mixin.png";
import mixin2 from "../../images/mixin2.png";

export default function Sass() {
  return (
    <div className="sass-info">
        <h1>SASS</h1>
        <h3>Syntactically Awesome Style Sheets</h3>
        <h2>Nesting</h2>
        <p>- process of placing selectors inside the scope of another selector.</p>
        <img src={sass} alt="" />

        <h3>& selector</h3>
        <img src={sass2} alt="& selector" />

        <h2>Variables</h2>
        <p>In Sass, $ is used to define and reference a variable.</p>
        <img src={sass_v} alt="sass variable" />
        <p>Place this in a selector.</p>
        <img src={sass_v2} alt="sass variable 2" />

        <h2>Mixin</h2>
        <p>- lets you make groups of CSS declarations that you want to reuse throughout your site.</p>
        <img src={mixin} alt="" />
        <p>Add the mixin in a selector.</p>
        <img src={mixin2} alt="" />
    </div>
  )
}

