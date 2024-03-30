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

// let avatarImg = document.getElementById("avatar_img");
// let avatarName = document.getElementById("name");
// let location = document.getElementById("location");
// let postImg = document.getElementById("post_img");
// let likes = document.getElementById("likes");
// let comment = document.getElementById("comment");

let container = document.getElementById("container");

// console.log(avatarImg);
// avatarImg.src = "images/avatar-courbet.jpg";

for (let i = 0; i < posts.length; i++) {
  const avatarImg = document.createElement("img");
  avatarImg.src = posts[i].avatar;
  avatarImg.alt = "Avatar image";
  avatarImg.id = "avatar";
  container.append(avatarImg);

  // console.log(posts[i]);
  // avatarImg.src = posts[i].avatar;
  // avatarName.value = posts[i].name;
  // location.value = posts[i].location;
}
