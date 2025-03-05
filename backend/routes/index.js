const router = require("express").Router();

const todos = require("./todos");
let baseurl = "/api/v1";

router.use(baseurl, todos);

module.exports = router;
