const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./database/db");


// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
// e.g. app.use("/<route>", require("./routes/<filename>"))

// start listening on PORT 5000 
app.listen(5000, () => {
    console.log("Server is running...")
    console.log("Listening on port 5000!")
});