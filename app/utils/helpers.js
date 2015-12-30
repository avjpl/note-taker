import axios from 'axios';

const accessToken = '?access_token=';

function getRepos(username) {
  return axios.get(`http://api.github.com/users/${username}/repos${accessToken}`);
}

function getUserInfo(username) {
  return axios.get(`http://api.github.com/users/${username}${accessToken}`);
}

export default {
  getGithubInfo: (username) => {
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((info) => {
        return {
          repos: info[0].data,
          bio: info[1].data
        }
      });
  }
};