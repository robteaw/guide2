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

        <h3>How to commit with a title and description</h3>
        <ul>
            <li>git add .</li>
            <li>git commit</li>
            <li>press "I" then type something on the first line for the title and then type something else on the third line for the description</li>
            <li>press "esc" then type ":wq" to exit</li>
            <li>git push</li>
            <span>credit: <a href="https://haydar-ai.medium.com/learning-how-to-git-creating-a-longer-commit-message-16ca32746c3a">Link</a></span>
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

        <h3>Divergent branch fix</h3>
        <ul>
        <li>git pull origin main --rebase</li>
        {/* https://stackoverflow.com/questions/62653114/how-can-i-deal-with-this-git-warning-pulling-without-specifying-how-to-reconci */}
        </ul>
    
    </div>

    <script src="main.js"></script>
    </>
  )
}
