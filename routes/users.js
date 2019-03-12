const router = require("express").Router();

router.route("/")
    .render("hello");

router.route("/users")
    .render("hello, user");

module.exports = router;