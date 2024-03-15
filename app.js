const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items = ["Wake Up!", "brush","fresh"];
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekend : "long",
    year : "numeric",
    day : "numeric",
    month : "long"
  };
  
  var day =  today.toLocaleDateString("hi-IN",options);
  res.render("list", {KindOfDay : day , newAddItem : items })
  }
);
app.post("/", function(req, res)  {
  var item = req.body.Item;
  items.push(item);
  res.redirect("/")
});

app.listen(3000, function () {
  console.log("Server is running in port 3000.");
});



