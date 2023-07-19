// images
import loop from "../../images/loop.png";
import nest from "../../images/nest.png";
import while_loop from "../../images/while.png";
import do_while from "../../images/do_while.png";
import html5 from "../../images/html-5.png";
import heads from "../../images/heads.png";
import filter from "../../images/code_filter.png";
import map from "../../images/code_map.png";

export default function Javascript() {
  return (
    <>
    <div className="info">
    <h1>JavaScript</h1>
    <p>an <u>interpreted</u> language which means it is not directly executed but read and executed by another program</p>
    <ul>
      <li>it is both used for frontend and backend (node - server side)</li>
      <li>the script can be put in the head or body</li>
    </ul>

    <h2>Data structure</h2>
    <p>	- array, binary tree, binary search tree, heap, hashing, graph,
	linked list, matrix, stack, queue</p>
    <p>static data structure - has a fixed memory size (ex. array)</p>
    <p>dynamic data structure - size is not fixed (ex. queue, stack)</p>

    <h2>Equality</h2>
    <p>== compares the type, string is converted to a number (loose equality)</p>
    <ul>
      <li>2 == "2" (true)</li>
    </ul>
    <p>=== compares the value and type (strict equality)</p>
    <ul>
      <li>2 === "2" (false)</li>
    </ul>

    <h2>Value vs Reference</h2>
    <p>value - number, boolean, string, undefined, null</p>
    <p>reference - object, function, array</p>

    <h2>Loops</h2>
      <h3>For Loop</h3>
      <p>A for loop contains three expressions separated by ; inside the parentheses:</p>
      <ol>
      <li>an initialization starts the loop and can also be used to declare the iterator variable.</li>
      <li>a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.</li>
      <li>an iteration statement is used to update the iterator variable on each loop.
      </li>
      </ol>
      <img className="loopImg" src={loop} alt="" />

      <h3>Nested Loop</h3>
      <p>When we have a loop running inside another loop.</p>
      <img className="loopImg2" src={nest} alt="" />

      <h3>While Loop</h3>
      <p>When we don't know in advance how many times the loop should run.</p>
      <img className="loopImg3" src={while_loop} alt="" />

      <h3>Do While Loop</h3>
      <p>Do a task once and then keep doing it until a specified condition is no longer met.</p>
      <img className="loopImg4" src={do_while} alt="" />

    <h2>Onclick</h2>
      <p>Change on individual button click</p>
      <img src={html5} id="img_click" alt="" />
      <div className="btn_change">
        {/* <button onClick="imgChange('./images/html-5.png')">HTML</button>
        <button onClick="imgChange('./images/css-3.png')">CSS</button>
        <button onClick="imgChange('./images/js.png')">JavaScript</button>
        <button onClick="imgChange('./images/react.png')">React</button> */}
      </div>

      <p>Change randomly on image click</p>
      <img src={heads} id="img_random" alt="" />
      <div className="btn_change">
        {/* <button onClick="randomImg()">Flip</button> */}
      </div>

    <h2>Fetch</h2>
      <p>Fetch uses promises. It uses async/await.</p>
      <p>AJAX uses callbacks.</p>
      

   <h2>Map</h2>
    <img src={map} alt="" />

    <h2>Filter</h2>
      <img src={filter} alt="" />

    <h2>Node</h2>
    <p>Node.js allows you to run JavaScript on the server.</p>
    
    <script src="main.js"></script>
  </div>
    </>
  )
}
