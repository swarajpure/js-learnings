const pulls = document.querySelector("#pulls");

fetch('https://api.github.com/repos/Real-Dev-Squad/website-welcome/pulls')
.then(res => res.json())
.then(res => { res.forEach(pull => {
    const pullDiv = document.createElement('div');
    pullDiv.setAttribute('id', 'pr-detail');
    const pullTitle = document.createElement('h3');
    const author = document.createElement('p');
    pullTitle.innerHTML = `<a href="${pull.html_url}">${pull.title}</a>`;
    author.innerHTML = `author : <a href="${pull.head.user.html_url}">${pull.head.user.login}</a>`;
    author.style.marginLeft = '20px';
    pullDiv.appendChild(pullTitle);
    pullDiv.appendChild(author);
    pulls.appendChild(pullDiv);
}
    ) })