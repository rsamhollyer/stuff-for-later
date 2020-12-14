const { Little_Wins } = require("../models");

const layouts = {
	partials: {
		head: "/partials/header",
		foot: "partials/footer",
	},
};

const home = (req, res) => {
	res.render("index", {
		...layouts,
		locals: {
			greeting: "Hello",
		},
	});
};

const newOne = (req, res) => {
	res.render("new", {
		...layouts,
	});
};

const postNew = async (req, res) => {
	const { title, category } = req.body;
	const newWin = await Little_Wins.create({
		title,
		category,
	});
	res.redirect("/list");
};

const list = async (req, res) => {
	const wins = await Little_Wins.findAll();
	res.render("list", {
		...layouts,
		locals: {
			wins,
		},
	});
};

module.exports = {
	home,
	newOne,
	postNew,
	list,
};
