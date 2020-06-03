const express = require("express");
const router = express.Router();


router.get("/admin", (req, res) => {
    res.render("admin/inicio", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/inicio.css"],
        jsFiles: ["/js/admin/header.js"]
    });
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
            "/js/admin/crear-act-proyecto.js",
            "/js/admin/header.js"
        ]
    });
});

router.get("/admin/consultas", (req, res) => {
    res.render("admin/consultas", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/consultas.css"
        ],
        jsFiles: ["/js/admin/header.js"]
    });
});

// consultas

router.get("/admin/consultas/hrs", (req, res) => {
    res.render("admin/consultas/horas-instructores", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/consultas/horas-instructores.css"
        ],
        jsFiles: ["/js/admin/header.js"]
    });
});

router.get("/admin/consultas/noraps", (req, res) => {
    res.render("admin/consultas/noraps", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/consultas/noraps.css"
        ],
        jsFiles: ["/js/admin/header.js"]
    });
});


router.get("/admin/consultas/elementos", (req, res) => {
    res.render("admin/consultas/consultar-elementos", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/consultas/consultar-elementos.css"
        ],
        jsFiles: ["/js/admin/header.js"]
    });
});


module.exports = router;