const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection ({
    host : "localhost",
    user: "root",
    password: "!Anthon69",
    database : "mystuffdb"
})

connection.connect(function(err) {
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

// require("./routes/mainstuff.js")(app);
// require("./routes/substuff.js")(app);
// require("./routes/user-api")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`)
});