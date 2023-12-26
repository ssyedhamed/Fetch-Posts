console.log("Fetch Posts");
const container = document.querySelector(".container");
const fetchBtn = document.querySelector(".fetch-btn");
const url = "https://jsonplaceholder.typicode.com/posts"; //endpoint

// using fetch api

const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json(); //this is not need when using third party api like axios
    console.log(data);
    const result = data.map(function (post) {
      return `<div class="post">
        <h1 class="title">${post.title}</h1>
        <p class="content">${post.body}</p>
      </div>`;
    });
    // console.log(result);
    container.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};
// fetchPosts();

fetchBtn.addEventListener("click", () => {
  fetchPosts();
});
