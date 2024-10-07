const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database-e841a-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
// initializeApp method will connect our project to our database on firebase
const database = getDatabase(app);
const postsInDB = ref(database, "oldagram");
let postsArray = [];
let postsKeyArr = [];

let container = document.getElementById("container");
let mainPostContainer = document.getElementById("main_post_container");
container.append(mainPostContainer);

onValue(postsInDB, function (snapshot) {
  postsArray = Object.values(snapshot.val());
  postsKeyArr = Object.keys(snapshot.val());
  // console.log(postsArray);

  mainPostContainer.innerHTML = "";
  let postsHtml = "";
  for (let i = 0; i < postsArray.length; i++) {
    const post = postsArray[i];
    postsHtml += `
    <div class="post_container" id="post_container${i}">
      <div class="user_info">
        <img src="${post.avatar}" alt="Avatar image" id="avatar_img" class="avatar">
        <div class="user_text">
          <p class="bold_text">${post.name}</p>
          <p>${post.location}</p>
        </div>
      </div>
      <img src="${post.post}" id="post_img${i}" class="post_img" alt="Post image">
      <section class="footer_div">
        <img id="heartIcon${i}" class="icons" src="./images/icon-heart.png" alt="Heart icon">
        <img class="icons" src="./images/icon-comment.png" alt="Comment icon">
        <img class="icons" src="./images/icon-dm.png" alt="Dm icon">
        <p class="bold_text">${post.likes} likes</p>
        <p><span class="bold_text">${post.username}</span> ${post.comment}</p>
      </section>
    </div>
  `;
  }
  mainPostContainer.innerHTML = postsHtml;
});

document.addEventListener("dblclick", function (e) {
  const targetId = e.target.id;
  const id = targetId.slice(-1);
  const target = targetId.slice(0, -1);

  if (target === "heartIcon") {
    const count = postsArray[id].likes + 1;
    const key = postsKeyArr[id];

    let updatedData = {
      likes: count,
    };

    const idRef = ref(database, "oldagram/" + key);
    update(idRef, updatedData);
  } else if (target === "post_img") {
    const count = postsArray[id].likes + 1;
    const key = postsKeyArr[id];
    let updatedData = {
      likes: count,
    };
    const idRef = ref(database, "oldagram/" + key);
    update(idRef, updatedData);
  }
});
