const express = require("express");

const app = express();
const PORT = 5050;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { content: ["This", "Website", "Is", "Live"] });
});

app.listen(PORT, () => {
  console.log(`Server is started is listening on port: ${PORT}`);
});
