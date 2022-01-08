const express = require("express");
const res = require("express/lib/response");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comments");
const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

dotenv.config();
app.use(morgan("dev"));
app.use(
  cors({
    orgin: "http://localhost:3060",
    credential: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get("/", (req, res) => {
  res.send("hello, node");
});
app.listen(3060, () => {
  console.log("server:3060");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
