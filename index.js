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

onValue(postsInDB, function (snapshot) {
  let postsArray = Object.values(snapshot.val());
  // console.log(postsArray);

  for (let i = 0; i < postsArray.length; i++) {
    console.log(postsArray[i].name);

    let postContainer = document.createElement("div");
    postContainer.className = "post_container";
    container.append(postContainer);

    let userInfoDiv = document.createElement("div");
    userInfoDiv.className = "user_info";
    postContainer.append(userInfoDiv);

    let avatarImg = document.createElement("img");
    avatarImg.src = postsArray[i].avatar;
    avatarImg.alt = "Avatar image";
    avatarImg.id = "avatar_img";
    avatarImg.className = "avatar";
    userInfoDiv.append(avatarImg);

    let userTextDiv = document.createElement("div");
    userTextDiv.className = "user_text";
    userInfoDiv.append(userTextDiv);

    let nameP = document.createElement("p");
    nameP.className = "bold_text";
    nameP.textContent = postsArray[i].name;
    userTextDiv.append(nameP);

    let locationP = document.createElement("p");
    locationP.textContent = postsArray[i].location;
    userTextDiv.append(locationP);

    let postImg = document.createElement("img");
    postImg.src = postsArray[i].post;
    postImg.id = "post_img" + i;
    postImg.className = "post_img";
    postImg.alt = "Post image";
    postContainer.append(postImg);

    let footerDiv = document.createElement("section");
    footerDiv.className = "footer_div";
    postContainer.append(footerDiv);

    let heartIcon = document.createElement("img");
    heartIcon.id = "heartIcon" + i;
    heartIcon.className = "icons";
    heartIcon.src = "./images/icon-heart.png";
    heartIcon.alt = "Heart icon";
    footerDiv.append(heartIcon);

    let commentIcon = document.createElement("img");
    commentIcon.className = "icons";
    commentIcon.src = "./images/icon-comment.png";
    commentIcon.alt = "Comment icon";
    footerDiv.append(commentIcon);

    let dmIcon = document.createElement("img");
    dmIcon.className = "icons";
    dmIcon.src = "./images/icon-dm.png";
    dmIcon.alt = "Dm icon";
    footerDiv.append(dmIcon);

    let likesP = document.createElement("p");
    likesP.textContent = postsArray[i].likes + " likes";
    likesP.className = "bold_text";
    footerDiv.append(likesP);

    let commentP = document.createElement("p");
    let username = document.createElement("span");
    username.className = "bold_text";
    username.textContent = postsArray[i].username;
    commentP.append(username);

    commentP.append(" " + postsArray[i].comment);
    footerDiv.append(commentP);

    let postImgDC = document.getElementById("post_img" + i);
    postImgDC.addEventListener("dblclick", function () {
      console.log("Doubled clicked post" + postImgDC.id);
      postsArray[i].likes += 1;
    });

    let heartIconDC = document.getElementById("heartIcon" + i);
    heartIconDC.addEventListener("dblclick", function () {
      console.log("Double clicked heart - " + heartIconDC.id);
    });
  }
});

// let container = document.getElementById("container");

// for (let i = 0; i < posts.length; i++) {
//   let postContainer = document.createElement("div");
//   postContainer.className = "post_container";
//   container.append(postContainer);

//   let userInfoDiv = document.createElement("div");
//   userInfoDiv.className = "user_info";
//   postContainer.append(userInfoDiv);

//   let avatarImg = document.createElement("img");
//   avatarImg.src = posts[i].avatar;
//   avatarImg.alt = "Avatar image";
//   avatarImg.id = "avatar_img";
//   avatarImg.className = "avatar";
//   userInfoDiv.append(avatarImg);

//   let userTextDiv = document.createElement("div");
//   userTextDiv.className = "user_text";
//   userInfoDiv.append(userTextDiv);

//   let nameP = document.createElement("p");
//   nameP.className = "bold_text";
//   nameP.textContent = posts[i].name;
//   userTextDiv.append(nameP);

//   let locationP = document.createElement("p");
//   locationP.textContent = posts[i].location;
//   userTextDiv.append(locationP);

//   let postImg = document.createElement("img");
//   postImg.src = posts[i].post;
//   postImg.id = "post_img" + i;
//   postImg.className = "post_img";
//   postImg.alt = "Post image";
//   postContainer.append(postImg);

//   let footerDiv = document.createElement("section");
//   footerDiv.className = "footer_div";
//   postContainer.append(footerDiv);

//   let heartIcon = document.createElement("img");
//   heartIcon.id = "heartIcon" + i;
//   heartIcon.className = "icons";
//   heartIcon.src = "./images/icon-heart.png";
//   heartIcon.alt = "Heart icon";
//   footerDiv.append(heartIcon);

//   let commentIcon = document.createElement("img");
//   commentIcon.className = "icons";
//   commentIcon.src = "./images/icon-comment.png";
//   commentIcon.alt = "Comment icon";
//   footerDiv.append(commentIcon);

//   let dmIcon = document.createElement("img");
//   dmIcon.className = "icons";
//   dmIcon.src = "./images/icon-dm.png";
//   dmIcon.alt = "Dm icon";
//   footerDiv.append(dmIcon);

//   let likesP = document.createElement("p");
//   likesP.textContent = posts[i].likes + " likes";
//   likesP.className = "bold_text";
//   footerDiv.append(likesP);

//   let commentP = document.createElement("p");
//   let username = document.createElement("span");
//   username.className = "bold_text";
//   username.textContent = posts[i].username;
//   commentP.append(username);

//   commentP.append(" " + posts[i].comment);
//   footerDiv.append(commentP);

//   let postImgDC = document.getElementById("post_img" + i);
//   postImgDC.addEventListener("dblclick", function () {
//     console.log("Doubled clicked post" + postImgDC.id);
//     posts[i].likes += 1;
//   });

//   let heartIconDC = document.getElementById("heartIcon" + i);
//   heartIconDC.addEventListener("dblclick", function () {
//     console.log("Double clicked heart - " + heartIconDC.id);
//   });
// }
