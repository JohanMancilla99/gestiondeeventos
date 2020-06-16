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

router.get("/admin/crear-elementos", (req, res) => {
    res.render("admin/crear-elementos", {
        cssFiles: [
            "/css/admin/header.css",
            "/css/admin/crear-elementos.css"
        ],
        jsFiles: [
            "/js/admin/header.js",
            "/js/admin/crear-elementos.js"
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