const router = require("express").Router();
const verify = require("../routes/verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    post: {
      title: "My First Post",
      description: "Something inside Here ",
    },
  });
});

module.exports = router;
