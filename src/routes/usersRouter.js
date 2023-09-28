const { Router } = require("express");
const router = Router();


/* ******* Users Routes *********** */
const usersController = require("../controllers/usersController");

/* Login */
router.get("/login", usersController.login);

/* Register */
router.get("/register", usersController.register);



module.exports = router