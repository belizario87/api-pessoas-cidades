const Router = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.send("funcionando");
});

router.post('/', (req, res) => {
    return res.status(statusCode.OK).json(req.body);
})
module.exports = router;
