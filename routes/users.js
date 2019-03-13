const router = require("express").Router();

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!')
});

router.get('/users', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello User!')
});

module.exports = router;