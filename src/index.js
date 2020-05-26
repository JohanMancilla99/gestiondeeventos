const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// hadlebars
const expresshbs = require("express-handlebars");

//importar rutas


//rutas


// establecer ruta de la carpeta views
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan('dev')); // muestra mensajes por consola
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dbnode'
}, 'single'));


app.use(express.urlencoded({extended: false})); 

// configuracion de la carpeta global 
app.use(express.static(path.join(__dirname, "public")));

// configurar handlebars
app.engine("hbs", expresshbs({
    defaultLayout: "base",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require(path.join(__dirname, "library/hbshelpers.js"))
}))

// ejecutar hbs como engine
app.set("view engine", "hbs");

// archivos de rutas
app.use(require(path.join(__dirname, "routes/index.js")));
app.use(require(path.join(__dirname, "routes/admin.js")));

const port = process.env.PORT || 4000;
app.listen(port || 4000, () => {
    console.log(`server running in port ${port}`);
});