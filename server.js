const express = require("express");
const basicAuth = require("basic-auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/secret", (req, res) => {
  const user = basicAuth(req);
  if (!user || user.name !== process.env.USERNAME || user.pass !== process.env.PASSWORD) {
    res.set("WWW-Authenticate", "Basic realm=\"example\"");
    return res.status(401).send("Authentication required or invalid credentials.");
  }
  res.send(process.env.SECRET_MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
