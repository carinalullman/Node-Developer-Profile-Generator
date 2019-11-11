//from activity 33 below to use as a guideline
//

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  }, {

    type: "input",
    message: "What's your favorite color?",
    name: "faveColor"
  }
  ])
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios
      .get(queryUrl).then(function (res) {

        info = {
          //color: name.faveColor,
          profilePic: res.data.avatar_url,
          name: res.data.login,
          location: res.data.location,
          profileUrl: res.data.html_url,
          blog: res.data.blog,
          bio: res.data.bio,
          repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,
        }

        // console.log(res);
        console.log(info);
        const queryUrl2 = `https://api.github.com/users/${username}/repos`;
        console.log(queryUrl2);

        axios.get(queryUrl2).then(function (res2) {
          console.log(res2.data[0].stargazers_count);
          let starCount = 0;
          for (let index = 0; index < res2.data.length; index++) {
            let count = res2.data[index].stargazers_count;
            console.log(count);
            console.log(starCount);
          }

        }
        );
      })
  })

