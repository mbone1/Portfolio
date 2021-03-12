var express = require("express");
var router = express.Router();
const axios = require('axios')
require('dotenv').config();

let url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=";
let apiKey = process.env.API_KEY

router.get("/", async function (req, res, next) {
  try {
    let responseData = await axios.get(url + apiKey)
    res.send(responseData.data)
  }
  catch (err) {
    console.log(err)
  }
});

module.exports = router;




  
