const axios = require("axios");

const data = {
  email: "2303a51380@sru.edu.in",
  name: "Meghana Nimmala",
  rollNo: "2303A51380",
  accessCode: "bDreAq",
  clientID: "",
  clientSecret: ""
};

axios.post(
  "http://4.224.186.213/evaluation-service/auth",
  data
)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error.response?.data || error.message);
});