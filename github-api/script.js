const pulls = document.querySelector("#pulls");

fetch('https://api.github.com/repos/Real-Dev-Squad/website-welcome/pulls')
.then(res => res.json())
.then(res => { res.forEach(pull => {
    const pullTitle = document.createElement('h3');
    pullTitle.innerHTML = `<a href="${pull.html_url}">${pull.title}</a>`;

    pulls.appendChild(pullTitle);
}
    ) })