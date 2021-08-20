const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to the database"))
  .catch((err) =>
    console.log("something happend while connecting to the database", err)
  );
