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
            "/css/admin/crear-ficha.css",
            "/css/admin/crear-competencia.css",
            "/css/admin/crear-resultado.css",
            "/css/admin/crear-ambiente.css",
            "/css/admin/crear-instructor.css",
            "/css/admin/crear-proyecto.css",
            "/css/admin/crear-act-aprendizaje.css",
            "/css/admin/crear-act-proyecto.css"
        ],
        jsFiles: [
            "/js/admin/elementos.js",
            "/js/admin/crear-ficha.js",
            "/js/admin/crear-competencia.js",
            "/js/admin/crear-resultado.js",
            "/js/admin/crear-instructor.js",
            "/js/admin/crear-proyectos.js",
            "/js/admin/crear-act-proyecto.js"
        ]
    });
});


module.exports = router;