const router = require("express").Router();
const userController = require("../controllers/userController");

// router.get('/', function (req, res) {
//     // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//     // res.end('Hello World!')
// });

router.route("/")
    .get(userController.findAll)
    .post(userController.addNewUser);
    




module.exports = router;