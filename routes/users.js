const router = require("express").Router();

router.get("/"), function(req, res) {
    res.render("Hello");
};

router.get("/users"), function(req, res) {
    res.render("Hello, user")
};

module.exports = router;