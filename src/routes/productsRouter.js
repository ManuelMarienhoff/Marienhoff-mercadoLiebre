const { Router } = require("express");
const router = Router();
const path = require("path")
const multer = require("multer")

/* ********** Set Multer ******************* */
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./public/img/products")
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

/* ******* Products Routes *********** */
const productsController = require("../controllers/productsController");

/* List */
router.get("/", productsController.list);

/* Detail */
router.get("/:id", productsController.detail);

/* Create */
router.get("/create", productsController.getCreate);

router.post("",upload.single("image"), productsController.create);

/* Update */
router.get("/edit/:id", productsController.getEdit);

router.put("/:id", upload.single("image"), productsController.edit);

/* Delete */

module.exports = router;