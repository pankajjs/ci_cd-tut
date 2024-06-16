import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());

app.get("/healthcheck", (req, res) => {
	return res.json({
		message: "server is healthy",
	});
});

app.listen(port, () => {
	console.log(`server up at ${port}`);
});
