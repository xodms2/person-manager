const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("successfully established connection to the database")
  )
  .catch((err) =>
    console.log(
      "Something unexpected happened while connecting to the database",
      err
    )
  );
