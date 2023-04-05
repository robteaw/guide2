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

    {/* <h2>Onclick</h2>
      <p>Change on individual button click</p>
      <img src="images/html-5.png" id="img_click" alt="">
      <div className="btn_change">
        <button onClick="imgChange('./images/html-5.png')">HTML</button>
        <button onClick="imgChange('./images/css-3.png')">CSS</button>
        <button onClick="imgChange('./images/js.png')">JavaScript</button>
        <button onClick="imgChange('./images/react.png')">React</button>
      </div> */}

      {/* <p>Change randomly on image click</p>
      <img src="images/heads.png" id="img_random" alt="">
      <div className="btn_change">
        <button onClick="randomImg()">Flip</button>
      </div> */}

    <h2>Fetch</h2>
      <p>Fetch uses promises. It uses async/await.</p>
      <p>AJAX uses callbacks.</p>
      

    {/* <h2>Map</h2>
    <div className="code_box">
      <p>const array = [1, 5, 6, 4, 23]</p>
      <p>const newArray = array.map((number)) => {</p>
      <p className="indent">return number * 2;</p>
      <p>}</p>
      <p>console.log(array); <span>[1, 5, 6, 4, 23]</span></p>
      <p>console.log(newArray); <span>[2, 10, 12, 8, 46]</span></p>
    </div>

    <h2>Filter</h2>
    <div className="code_box">
      <p>const array = [1, 5, 6, 4, 23]</p>
      <p>const newArray = array.filter((number)) => {</p>
      <p className="indent">return number < 5;</p>
      <p>}</p>
      <p>console.log(array); <span>[1, 5, 6, 4, 23]</span></p>
      <p>console.log(newArray); <span>[1, 4]</span></p>
    </div> */}

    <h2>Node</h2>
    <p>Node.js allows you to run JavaScript on the server.</p>
    
    <script src="main.js"></script>
  </div>
    </>
  )
}
