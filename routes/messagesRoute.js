const router = require("express").Router();
const { addMsg, getAllMessage } = require("../controllers/messagesController");

router.post("/addmsg/", addMsg);
router.post("/getmsg/", getAllMessage);

module.exports = router;
