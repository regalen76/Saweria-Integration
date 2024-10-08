const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  axios = require("axios"),
  PORT = 8080;

app.use(bodyParser.json());

app.post("/", (request, respond) => {
  const destination = "https://anchovy-cunning-koi.ngrok-free.app";
  const donationData = {
    donator_name: request.body.donator_name,
    amount_raw: request.body.amount_raw,
  };

  if (request.body.amount_raw >= 5000 && request.body.amount_raw <= 5999) {
    //skill1
    axios
      .post(destination + "/skill1", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 6000 &&
    request.body.amount_raw <= 9999
  ) {
    //skill2
    axios
      .post(destination + "/skill2", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 10000 &&
    request.body.amount_raw <= 11999
  ) {
    //skill3
    axios
      .post(destination + "/skill3", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 12000 &&
    request.body.amount_raw <= 14999
  ) {
    //spell
    axios
      .post(destination + "/spell", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 15000 &&
    request.body.amount_raw <= 19999
  ) {
    //recal2
    axios
      .post(destination + "/recall", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 20000 &&
    request.body.amount_raw <= 23999
  ) {
    //surender
    axios
      .post(destination + "/surrender", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  } else if (
    request.body.amount_raw >= 100000 &&
    request.body.amount_raw <= 101999
  ) {
    //endstream
    axios
      .post(destination + "/endstream", donationData)
      .then((response) => {
        console.log("Response from local app:", response.data);
      })
      .catch((error) => {
        console.error("Error sending request to local app:", error);
      });
  }

  respond.status(200);
});

app.listen(PORT, () => console.log(`Program Berjalan Pada Port: ${PORT}`));
