const express = require("express");
const router = express.Router();



router.get("/admin", (req, res) => {
    res.render("admin/inicio");
});

router.get("/admin/elementos", (req, res) => {
    res.render("admin/elementos", {
        cssFiles: [
            "/css/admin/menu-elementos.css",
            "/css/admin/header.css",
            "/css/admin/crear-programa.css",
            "/css/admin/crear-ficha.css"
        ],
        jsFiles: [
            "/js/admin/elementos.js"
        ]
    });
});


module.exports = router;