const express = require("express");
const { connect } = require("./connect");
const url = require("./models/url");
const app = express();
const ejs = require("ejs");
const path = require("path");

// view engine
app.get("/", (req, res) => {
  ejs.renderFile(
    path.resolve(__dirname, "./views/index.ejs"),
    function (err, str) {
      res.send(str);
    }
  );
});

const urlRoute = require("./routes/urlRoutes");
app.use(express.json());
app.use(express.static("/public"));
app.use("/url", urlRoute);

// app.get('/', (req, res) => {
//   // Render the 'index' EJS file
//   res.sendFile(__dirname+ '/views/index.ejs');
// });

app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;

  const entry = await url.findOneAndUpdate(
    { shortId: shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  res.redirect(entry.redirectUrl);
});

connect("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("connected to db")
);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
