const getUsersAPI = "https://api.findids.net/api/me";
const axios = require("axios");
const loginToken = window.localStorage.getItem("login_token");
let config = {
  method: "get",
  url: getUsersAPI,
  headers: {
    'Authorization': `Bearer ${loginToken}`,
  }
};
const GetMe = () => {
    axios(config)
    .then(response => {
        const showAccountName = document.querySelector(".account-name");
        const accountName = response.data.data.name.split(" ");
        showAccountName.innerHTML = accountName[accountName.length - 1];
    }
    )
    .catch(err => console.log(err));
}

export default GetMe;
