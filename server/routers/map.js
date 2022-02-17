const express = require("express");
const multer = require("multer"); // библиотека для загрузки док-ов локально

const router = express.Router();

const { getMap, setNewMarker, editMapPoint,deletePoint, addStar } = require("../controllers/mapController");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/tmp/my_uploads");
  },
  filename(req, file, cb) {
    const regexp = /\.\w{1,5}$/gm; // расширение файла с точкой(пр: .jpg )
    cb(
      null,
      `${file.fieldname}-${Date.now()}${file.originalname.match(regexp)[0]}`
    );
  },
});
const upload = multer({ storage });

router.get("/", getMap);
router.put("/:id", editMapPoint);
router.post("/", setNewMarker);
router.delete("/:id", deletePoint);
router.put('/point/:id', addStar)


module.exports = router;
