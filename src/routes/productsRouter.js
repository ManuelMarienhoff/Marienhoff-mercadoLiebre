const { Router } = require("express");
const router = Router();
const upload = require("../middlewares/multerProducts")


/* ******* Products Routes *********** */
const productsController = require("../controllers/productsController");

/* List */
router.get("/", productsController.list);

/* Detail */
router.get("/detail/:id", productsController.detail); /* ojo con poner get"/:id" xq es un comodin, cancelaria las rutas de abajo cumplan con eso */

/* Create */
router.get("/create", productsController.getCreate);

router.post("",upload.single("image"), productsController.create);

/* Update */
router.get("/edit/:id", productsController.getEdit);

router.put("/:id", upload.single("image"), productsController.edit);

/* Delete */
router.delete("/eliminar/:id", productsController.delete)

module.exports = router;