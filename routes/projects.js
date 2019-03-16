const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.route("/")
    .get(projectController.findAll)
    .post(projectController.addNewProject);
    

module.exports = router;