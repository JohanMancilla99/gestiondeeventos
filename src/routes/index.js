const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        cssFiles: [
            "/css/inicio-header.css", 
            "/css/index.css"
        ]
    });
});


module.exports = router;