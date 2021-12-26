const express = require("express");
const router = express.Router();

//전체글보기
router.get("/", (req, res) => {
  const board_data = [
    {
      category: "유머",
      title: "하하하",
      date: "2021-12-25",
      like: 100,
      comment_count: 12,
    },
    {
      category: "이슈",
      title: "세상에",
      date: "2021-12-25",
      like: 110,
      comment_count: 10,
    },
    {
      category: "공포/오컬트",
      title: "어머나",
      date: "2021-12-25",
      like: 90,
      comment_count: 20,
    },
    {
      category: "정보",
      title: "대박",
      date: "2021-12-25",
      like: 80,
      comment_count: 15,
    },
  ];
  // res.send("전체보기 ");
  res.status(200).json(board_data);
});
//글내용보기
router.get("/:id", (req, res) => {
  res.send("글내용보기 ");
});
//글쓰기
router.post("/", (req, res) => {
  res.send("글쓰기");
});
//글수정
router.put("/:id", (req, res) => {
  res.send("수정");
});
//글삭제
router.delete("/:id", (req, res) => {
  res.send("삭제");
});
//검색
router.get("/search/:search", (req, res) => {
  res.send("검색");
});

module.exports = router;
