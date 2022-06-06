const express = require("express");
const router = express.Router();
const {graphqlHTTP} = require("express-graphql");
const schema = require("../Controllers/todoController")
/* GET home page. */

router.get("/", function(req, res, next) {
  res.send("go to /api to use GraphQl API");
});
router.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

module.exports = router;