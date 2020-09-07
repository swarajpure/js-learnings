const pulls = document.querySelector("#pulls");

const createElements = () => {
    const pullDiv = document.createElement('div');
    pullDiv.setAttribute('id', 'pr-detail');
    const pullTitle = document.createElement('h3');
    const author = document.createElement('p');
    return { pullDiv, pullTitle, author}; 
}

const assignValues = (prLink, prTitle, userLink, userName) => {
    const { pullDiv, pullTitle, author} = createElements();
    pullTitle.innerHTML = `<a href="${prLink}">${prTitle}</a>`;
    author.innerHTML = `author : <a href="${userLink}">${userName}</a>`;
    return { pullTitle, author, pullDiv };
}

fetch('https://api.github.com/repos/Real-Dev-Squad/website-welcome/pulls')
.then(res => res.json())
.then(res => { res.forEach(pull => {
    const { pullTitle, author, pullDiv } = assignValues(pull.html_url, pull.title, pull.head.user.html_url, pull.head.user.login);
    pullDiv.appendChild(pullTitle);
    pullDiv.appendChild(author);
    pulls.appendChild(pullDiv);
}
    ) })