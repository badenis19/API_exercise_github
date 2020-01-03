// fetch from https://www.youtube.com/watch?v=tVQgfKqbX3M
// const fetch = require('node-fetch'); // TO RUN IN TERMINAL npm i node-fetch --save
// for the JS to run after the HTML has loaded

//Element from the page
const button = document.getElementById("button");
const repoList = document.querySelector(".repoList");
let userInput = document.getElementById("userid");

const getPosts = async (input) => {
    const res = await fetch(`https://api.github.com/users/${input}/repos`);
    const posts = await res.json();
    if (posts.length){
        repoList.innerHTML = ``;
        posts.forEach((post) => {
        let content = `<li>${post.name}</li>`
        repoList.insertAdjacentHTML("beforeend", content)
    });
    } else {
        repoList.innerHTML = ``; // clearing the previous data
        repoList.innerHTML = `<li>Username doesn't exist</li>`;
    }
}

// --> clicking on the button will trigger the search <---
// if (button) {
//     button.addEventListener("click", (e) => {
//         userInput = document.getElementById("userid").value;
//         e.preventDefault;
//         getPosts(userInput);
//         console.log(userInput);
//     })
// }

// ---> each key up will trigger a new search <---
if (userInput) {
    userInput.addEventListener("keyup", (e) => {
        userInput = document.getElementById("userid").value;
        e.preventDefault;
        getPosts(userInput);
        console.log("up");
    })
}

// ---> to filter result of search <---
// const getUsers = async () => {
//     const res = await fetch(`https://api.github.com/users`);
//     const users = await res.json();
//     // console.log(users[0].site_admin)
//     result = users.filter((user) => user.site_admin === false );
//     console.log(result)
// }
