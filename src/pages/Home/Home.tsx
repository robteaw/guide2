import Table from './Table';
import Form from './Form';
import Center from './Center';
// images
import img1 from "../../images/shortcut_html.png";
import img2 from "../../images/shortcut_p.png";
import img3 from "../../images/shortcut_class.png";
import flex from "../../images/flex.png";
import grid from "../../images/grid.png";

export default function Home() {
  return (
    <>
    <div className="info">
      <h1>HTML</h1>
      <h2>HTML vs HTML 5</h2>

      <Table />

      <h3>Document Object Model (DOM)</h3>
      <ul>
        <li>all HTML elements are objects</li>
      </ul>

      <h2>Form</h2>
      <table>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>GET</td>
          <td>Used to appends form data to the URL in name or value pair.</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>Supported by HTTP and depicts that a web server accepts the data included in the body of the message.</td>
        </tr>
      </table>

      <Form />

      <h2>Shortcuts</h2>
      <h3>Auto-populate html structure</h3>
      <p>Type <b>!</b> then press <b>tab</b> will display like below.</p>
      <img src={img1} alt="" className="img1" />

      <h3>Create multiple elements</h3>
      <p>
        Type <b>p*3</b> then press <b>tab</b> will create 3 rows of paragraphs.
      </p>
      <img src={img2} alt="" className="img2" />

      <h3>Create class and id for element</h3>
      <p>
        Type <b>.example#example</b> then press <b>tab</b> will create a div
        with class and id.
      </p>
      <img src={img3} alt="" className="img3" />

      <h2>Flex</h2>
      <p>
        Flex is designed for one-dimensional layout. It will display the
        contents in a row.
      </p>
      <img src={flex} alt="" />

      <h2>Grid</h2>
      <p>
        Grid is designed for two-dimensional layout. It will display the
        contents based on how the columns and rows are divided.
      </p>
      <img src={grid} alt="" />

      <Center />
      
      <script src="main.js"></script>
      </div>
    </>
  )
}


