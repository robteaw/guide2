import box from "../../images/box_model.png";
import css from "../../images/code_css.png";

export default function Css() {
  return (
    <>
    <div className="info">
        <h1>CSS</h1>
        <p>Selector - selects all HTML elements</p>
        <ul>
          <li>class, id, div, p</li>
        </ul>

        <h2>Setting up CSS</h2>
        <h3>Box Model</h3>
        <p>The box model is a box that wraps around each HTML elment. Starting from outer layer to inner, it includes:</p>
        <ul>
          <li>Margin</li>
          <li>Border</li>
          <li>Padding</li>
          <li>Content</li>
        </ul>
        <div className="box-info">
          <img src={box} alt="box" />
          <h3>Box Model in stylesheet</h3>
          <img src={css} alt="css" />
        </div>
    </div>

    <script src="main.js"></script>
    </>
  )
}
