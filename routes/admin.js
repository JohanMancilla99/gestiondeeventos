const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
    res.render("admin/inicio");
});

router.get("/admin/elementos", (req, res) => {
    res.render("admin/elementos", {
        style: "/css/admin/menu-elementos.css",
        script: "/js/admin/elementos.js"
    });
});

module.exports = router;