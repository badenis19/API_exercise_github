const fetch = require('node-fetch'); // TO RUN IN TERMINAL npm i node-fetch --save


const input = document.getElementById("gitname");

const test = document.getElementById("test");

console.log(test)

test.addEventListener("click", (e) => {
    // console.log("clicked")
    test.innerHTML = "NEWWW"
})

// const getPosts = () => {
//     return fetch("https://api.github.com/users/badenis19/repos")
//         .then(res => res.json())
//         .then(posts => console.log(posts))
// }

// getPosts();

