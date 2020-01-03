// fetch from https://www.youtube.com/watch?v=tVQgfKqbX3M
// const fetch = require('node-fetch'); // TO RUN IN TERMINAL npm i node-fetch --save
// for the JS to run after the HTML has loaded

//Element from the page
const button = document.getElementById("button");
const repoList = document.querySelector(".repoList");

// const getPosts = async (input) => {
//     const res = await fetch(`https://api.github.com/users/${input}/repos`);
//     const posts = await res.json();
//     posts.forEach((post) => {
//         let content = `<li>${post.name}</li>`
//         repoList.insertAdjacentHTML("beforeend", content)
//     });
// }



// if (button) {
//     button.addEventListener("click", (e) => {
//         const userInput = document.getElementById("userid").value;
//         e.preventDefault;
//         getPosts(userInput);
//         console.log(userInput);
//     })
// }
