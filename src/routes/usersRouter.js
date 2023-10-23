const { Router } = require("express");
const router = Router();
const upload = require("../middlewares/multerUsers")


/* ******* Users Routes *********** */
const usersController = require("../controllers/usersController");

/* Login */
router.get("/login", usersController.getLogin);

/* Register */
router.get("/register", usersController.getRegister);
router.post("/register", upload.single("userPhoto"), usersController.create)

// Perfil del usuario

router.get("/perfil/:userId", usersController.profile)


module.exports = router