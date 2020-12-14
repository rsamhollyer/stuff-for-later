const http = require("http");
const express = require("express");
const morgan = require("morgan");
const es6Renderer = require("express-es6-template-engine");
const Sequelize = require("sequelize");
const app = express();
const server = http.createServer(app);
const controllers = require("./controllers/controllers");
const PORT = 3000;
const HOST = "0.0.0.0";

const logger = morgan("tiny");

app.use(logger);

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

//My routers using fncs from controllers.js

app.get("/", controllers.home);

app.get("/new", controllers.newOne);

app.post("/new", controllers.postNew);

app.get("/list", controllers.list);

server.listen(PORT, HOST, () => {
	console.log(`Listening at http://${HOST}:${PORT}`);
});
