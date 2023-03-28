import React from 'react'

export default function Git() {
  return (
    <>
     <div className="info">
        <h1>Github</h1>
        <h3>How to commit and push to Github</h3>
        <ul>
            <li>git add --all</li>
            <li>git commit -m "message"</li>
            <li>git push</li>
        </ul>

        <h3>How to pull from Github</h3>
        <ul>
            <li>git pull</li>
        </ul>

        <h3>How to pull and push at the same time</h3>
        <ul>
            <li>git pull --rebase</li>
            <li>git push</li>
        </ul>

        <h3>How to see all commits</h3>
        <ul>
            <li>git log</li>
        </ul>

        <h3>How to see what has changed and what hasn't</h3>
        <ul>
            <li>git status</li>
        </ul>

        <h1>Terminal</h1>
        <h3>List all files in directory</h3>
        <p>ls</p>

        <h3>Go to intended directory</h3>
        <p>cd nameOfFile</p>

        <h3>Go back a directory</h3>
        <p>cd ..</p>

        <h3>Create a folder</h3>
        <p>mkdir myfile</p>

        <h3>Open file</h3>
        <p>code .</p>
    </div>

    <script src="main.js"></script>
    </>
  )
}
