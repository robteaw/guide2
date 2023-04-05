export default function Table() {
  return (
    <>
      <table>
        <tr>
          <th>Properties</th>
          <th>HTML</th>
          <th>HTML 5</th>
        </tr>
        <tr>
          <td>Mobile friendliness</td>
          <td>Less mobile friendly</td>
          <td>Mobile friendly</td>
        </tr>
        <tr>
          <td>Drag and drop</td>
          <td>Do not support</td>
          <td>Supports</td>
        </tr>
        <tr>
          <td>Media support</td>
          <td>Do not support</td>
          <td>JavaScript runs directly on browser</td>
        </tr>
        <tr>
          <td>JavaScript support</td>
          <td>Cannot run JavaScript in HTML</td>
          <td>Support JavaScript in background</td>
        </tr>
        <tr>
          <td>Elements</td>
          <td>No elements like nav or header</td>
          <td>Includes nav, header and footer</td>
        </tr>
        <tr>
          <td>Memory storage</td>
          <td>Cookies are used to store temporary data</td>
          <td>Temporary data is stored in the database</td>
        </tr>
      </table>
    </>
  )
}
