const {Router} = require("express");
const router = Router();

/* ********** Require Routes **********************/
const productsRouter = require("./productsRouter");
router.use("/products", productsRouter);

const usersRouter = require("./usersRouter");
router.use("/users", usersRouter);

/* ********** Main Routes *********************** */
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);



module.exports = router;