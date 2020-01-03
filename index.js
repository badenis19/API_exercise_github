// fetch from https://www.youtube.com/watch?v=tVQgfKqbX3M
// const fetch = require('node-fetch'); // TO RUN IN TERMINAL npm i node-fetch --save
// for the JS to run after the HTML has loaded

//Element from the page
const UserInput = document.querySelector("#userid").value;
const button = document.querySelector(".submit");
const repoList = document.querySelector(".repoList");
const form = document.querySelector("#form1");
// const query = "badenis19";

const getPosts = async () => {
    const res = await fetch(`https://api.github.com/users/${UserInput}/repos`);
    const posts = await res.json();
    posts.forEach((post) => {
        let content = `<li>${post.name}</li>`
        repoList.insertAdjacentHTML("beforeend", content)
    });
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault;
        getPosts(UserInput);
        console.log(UserInput)
        // return false;
    })
}
