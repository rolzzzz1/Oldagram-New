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

let container = document.getElementById("container");
let mainPostContainer = document.getElementById("main_post_container");
container.append(mainPostContainer);

onValue(postsInDB, function (snapshot) {
  let postsArray = Object.values(snapshot.val());
  let postsKeyArr = Object.keys(snapshot.val());
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

    const postImgDC = document.getElementById(`"post_img${i}"`);
    postImgDC.addEventListener("dblclick", function () {
      console.log("Doubled clicked post" + postImgDC.id);
      const count = postsArray[i].likes + 1;
      const key = postsKeyArr[i];

      let updatedData = {
        likes: count,
      };

      const idRef = ref(database, "oldagram/" + key);
      update(idRef, updatedData);
    });
  }
  mainPostContainer.innerHTML = postsHtml;
});

heartIconDC.addEventListener("dblclick", function () {
  console.log("Double clicked heart - " + heartIconDC.id);
  const count = postsArray[i].likes + 1;
  const key = postsKeyArr[i];

  let updatedData = {
    likes: count,
  };

  const idRef = ref(database, "oldagram/" + key);
  update(idRef, updatedData);
});

// onValue(postsInDB, function (snapshot) {
//   let postsArray = Object.values(snapshot.val());
//   let postsKeyArr = Object.keys(snapshot.val());
//   // console.log(postsArray);

//   mainPostContainer.innerHTML = "";

//   for (let i = 0; i < postsArray.length; i++) {
//     console.log(postsArray[i].name);

//     let postContainer = document.createElement("div");
//     postContainer.className = "post_container";
//     postContainer.id = "post_container" + i;
//     mainPostContainer.append(postContainer);

//     let userInfoDiv = document.createElement("div");
//     userInfoDiv.className = "user_info";
//     postContainer.append(userInfoDiv);

//     let avatarImg = document.createElement("img");
//     avatarImg.src = postsArray[i].avatar;
//     avatarImg.alt = "Avatar image";
//     avatarImg.id = "avatar_img";
//     avatarImg.className = "avatar";
//     userInfoDiv.append(avatarImg);

//     let userTextDiv = document.createElement("div");
//     userTextDiv.className = "user_text";
//     userInfoDiv.append(userTextDiv);

//     let nameP = document.createElement("p");
//     nameP.className = "bold_text";
//     nameP.textContent = postsArray[i].name;
//     userTextDiv.append(nameP);

//     let locationP = document.createElement("p");
//     locationP.textContent = postsArray[i].location;
//     userTextDiv.append(locationP);

//     let postImg = document.createElement("img");
//     postImg.src = postsArray[i].post;
//     postImg.id = "post_img" + i;
//     postImg.className = "post_img";
//     postImg.alt = "Post image";
//     postContainer.append(postImg);

//     let footerDiv = document.createElement("section");
//     footerDiv.className = "footer_div";
//     postContainer.append(footerDiv);

//     let heartIcon = document.createElement("img");
//     heartIcon.id = "heartIcon" + i;
//     heartIcon.className = "icons";
//     heartIcon.src = "./images/icon-heart.png";
//     heartIcon.alt = "Heart icon";
//     footerDiv.append(heartIcon);

//     let commentIcon = document.createElement("img");
//     commentIcon.className = "icons";
//     commentIcon.src = "./images/icon-comment.png";
//     commentIcon.alt = "Comment icon";
//     footerDiv.append(commentIcon);

//     let dmIcon = document.createElement("img");
//     dmIcon.className = "icons";
//     dmIcon.src = "./images/icon-dm.png";
//     dmIcon.alt = "Dm icon";
//     footerDiv.append(dmIcon);

//     let likesP = document.createElement("p");
//     likesP.textContent = postsArray[i].likes + " likes";
//     likesP.className = "bold_text";
//     footerDiv.append(likesP);

//     let commentP = document.createElement("p");
//     let username = document.createElement("span");
//     username.className = "bold_text";
//     username.textContent = postsArray[i].username;
//     commentP.append(username);

//     commentP.append(" " + postsArray[i].comment);
//     footerDiv.append(commentP);

//     let postImgDC = document.getElementById("post_img" + i);
//     postImgDC.addEventListener("dblclick", function () {
//       console.log("Doubled clicked post" + postImgDC.id);
//       const count = postsArray[i].likes + 1;
//       const key = postsKeyArr[i];

//       let updatedData = {
//         likes: count,
//       };

//       const idRef = ref(database, "oldagram/" + key);
//       update(idRef, updatedData);
//     });

//     let heartIconDC = document.getElementById("heartIcon" + i);
//     heartIconDC.addEventListener("dblclick", function () {
//       console.log("Double clicked heart - " + heartIconDC.id);
//       const count = postsArray[i].likes + 1;
//       const key = postsKeyArr[i];

//       let updatedData = {
//         likes: count,
//       };

//       const idRef = ref(database, "oldagram/" + key);
//       update(idRef, updatedData);
//     });
//   }
// });
