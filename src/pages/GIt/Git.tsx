export default function Git() {
  return (
    <>
      <div className="info">
        <h1>Github</h1>
        <h3>Commit and push to Github</h3>
        <ul>
          <li>git add --all</li>
          <li>git commit -m "message"</li>
          <li>git push</li>
        </ul>

        <h3>Commit with a title and description</h3>
        <ul>
          <li>git add .</li>
          <li>git commit</li>
          <li>
            press "I" then type something on the first line for the title and
            then type something else on the third line for the description
          </li>
          <li>press "esc" then type ":wq" to exit</li>
          <li>git push</li>
          <span>
            credit:{" "}
            <a href="https://haydar-ai.medium.com/learning-how-to-git-creating-a-longer-commit-message-16ca32746c3a">
              Link
            </a>
          </span>
        </ul>

        <h3>Pull from Github</h3>
        <ul>
          <li>git pull</li>
        </ul>

        <h3>Pull and push at the same time</h3>
        <ul>
          <li>git pull --rebase</li>
          <li>git push</li>
        </ul>

        <h3>See all commits</h3>
        <ul>
          <li>git log</li>
        </ul>

        <h3>See what has changed and what hasn't</h3>
        <ul>
          <li>git status</li>
        </ul>

        <h3>Create a branch to commit separate from the main branch</h3>
        <ul>
          <li>git branch nameOfBranch</li>
          <li>git branch -a</li>
          <li>git checkout nameOfBranch</li>
          <li>git branch -a</li>
          <li>git add .</li>
          <li>git status</li>
          <li>git commit</li>
          <li>To switch to main: git checkout main</li>
        </ul>

        <h3>Alternative way to create branch</h3>
        <li>press "View then "Command Palette</li>
        <li></li>

        <h3>Delete a branch</h3>
        <li>git branch -D nameOfBranch</li>

        <h3>Shortcut create branch</h3>
        <li>git checkout -b nameOfBranch</li>

        <h3>Merge Branches</h3>
        <li>git checkout main</li>
        <li>git merge nameOfBranch</li>

        <h3>Divergent branch fix</h3>
        <ul>
          <li>git pull origin main --rebase</li>
          {/* https://stackoverflow.com/questions/62653114/how-can-i-deal-with-this-git-warning-pulling-without-specifying-how-to-reconci */}
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
  );
}

// test commit
