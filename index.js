const express = require("express");
const { connect } = require("./connect");
const url = require("./models/url");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

// view engine
app.get("/", (req, res) => {
  const htmlFilePath = path.resolve(__dirname, "./views/index.html");

  fs.readFile(htmlFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(data);
    }
  });
});

const urlRoute = require("./routes/urlRoutes");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/url", urlRoute);

// app.get('/', (req, res) => {
//   // Render the 'index' EJS file
//   res.sendFile(__dirname+ '/views/index.ejs');
// });

app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  try {
    const entry = await url.findOneAndUpdate(
      { shortId: shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    res.redirect(entry.redirectUrl);
  } catch (error) {
    res.status(404).json({ error: "Invalid URL" });
  }
});

connect("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("connected to db")
);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
