import React from 'react'

function Terminal() {
  return (
    <div className="info"> <h1>Terminal</h1>
    <h3>List all files in directory</h3>
    <p>ls</p>

    <h3>Go to intended directory</h3>
    <p>cd nameOfFile</p>

    <h3>Go back a directory</h3>
    <p>cd ..</p>

    <h3>Create a folder</h3>
    <p>mkdir myfile</p>

    <h3>Open file</h3>
    <p>code .</p></div>
  )
}

export default Terminal