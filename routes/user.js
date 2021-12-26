const express = require("express");
const router = express.Router();

//회원가입
router.post("/", (req, res) => {
  res.send("회원가입");
});
//로그인
router.post("/login", (req, res) => {
  res.send("로그인");
});
//비번변경
router.post("/password", (req, res) => {
  res.send("비번변경");
});
//hp인증
router.post("/phone", (req, res) => {
  res.send("hp인증");
});

//개인정보
router.get("/:id", (req, res) => {
  res.send("개인정보");
});

module.exports = router;
