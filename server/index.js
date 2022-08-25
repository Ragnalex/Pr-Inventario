const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");


const app = express();

require("./database");


app.set("port", process.env.PORT || 5000);



app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });


