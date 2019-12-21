const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// require("./routes/mainstuff.js")(app);
// require("./routes/substuff.js")(app);
// require("./routes/user-api")(app);

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`)
});