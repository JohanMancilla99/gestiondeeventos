const express = require("express");
const path = require("path");
const morgan = require("morgan");
// hadlebars
const expresshbs = require("express-handlebars");

// app de express
const app = express();

// morgan (mostrar peticiones en consola)
app.use(morgan("dev"));

// establecer ruta de la carpeta views
app.set("views", path.join(__dirname, "views"));

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
app.use(require(path.join(__dirname, "routes/admin.js")));

const port = process.env.port || 9000;
app.listen(port || 9000, () => {
    console.log(`server running in port ${port}`);
});