const express = require("express");
const router = express.Router();

const cont = require("../controller/controller");
const m = require("../middleware/middleware");

router.use(m.adminAuth);

router.get("/", cont.getOwners);

router.get("/:id", cont.getUser);

router.get("/:id/cars", cont.getCars);

router.post("/:username/:email/:password/:name", cont.posUser);

router.put("/:name", cont.putUser);  

router.delete("/:id", cont.delUser);


module.exports = router;