const axios = require("axios");
const loginToken = window.localStorage.getItem("login_token");
const AxiosAccount = (type, method, url, data, action) => {
    let config = {
        method: method,
        url: url,
        headers: {
          'Authorization': `Bearer ${loginToken}`,
        },
        data: data
    };
    axios(config)
    .then(response => {
        const showAccountName = document.querySelector(".account-name");
            if (type === "get_me") {
                const accountName = response.data.data.name.split(" ");
                showAccountName.innerHTML = accountName[accountName.length - 1];
            };
            if (type === "login") {
                window.localStorage.setItem("login_token", response.data.token);
                const accountName = response.data.data.name.split(" ");
                showAccountName.innerHTML = accountName[accountName.length - 1];
                action()
            };
        }
    )
    .catch(err => console.log(err));
}

export default AxiosAccount;