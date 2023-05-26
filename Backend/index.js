const express = require("express");
const { blog } = require("./routes/blog.routes");
const { connection } = require("./config/db");
const { auth } = require("./middleware/auth.middleware");
const { user } = require("./routes/user.routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

//auth
app.use("/blog", auth);

//user route
app.use("/user", user);

//blog route
app.use("/blog", blog);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
    console.log("Error connecting in database");
  }

  console.log(`Server is running at port ${process.env.port}`);
});
