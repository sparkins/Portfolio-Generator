const router = require("express").Router();
const userRoutes = require("./users");

//User routes

router.use("/", userRoutes);
router.use("/users", userRoutes);

module.exports = router;