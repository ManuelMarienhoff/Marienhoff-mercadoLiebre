const { Router } = require("express");
const router = Router();
const upload = require("../middlewares/multerUsers")


/* ******* Users Routes *********** */
const usersController = require("../controllers/usersController");

/* ******* Middlewares ************ */
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const registerValidator = require("../validations/validateRegister")
const registerMiddleware = require("../middlewares/registerMiddleware")
const loginValidator = require("../validations/validateLogin")
const loginMiddleware = require("../middlewares/loginMiddleware")

/* Login */
router.get("/login", guestMiddleware, usersController.getLogin);
router.post("/login",loginValidator,loginMiddleware, usersController.login)

/* Register */
router.get("/register", guestMiddleware, usersController.getRegister);
router.post("/createUser", upload.single("userPhoto"),registerValidator,registerMiddleware, usersController.create)

// Perfil del usuario

router.get("/perfil", authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout)


module.exports = router