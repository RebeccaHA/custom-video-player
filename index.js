const postsContainer = document.getElementById("post-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach(post => {
    const postBlock = document.createElement("div");
    postBlock.classList.add("post");
    postBlock.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body"> ${post.body}</p>
    </div>`;

    postsContainer.appendChild(postBlock);
  });
}

function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".posts");
  posts.forEach(post => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.getElementsByClassName.display = "none";
    }
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");
  }, 1000);

  setTimeout(() => {
    page++;
    showPosts();
  }, 300);
}

showPosts();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener("input", filterPosts);
