// Setup dependencies

const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db");

// Setup Express app
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static('Assets'));

app.use('/Assets', express.static(path.join(__dirname, 'Assets')));

app.use(express.urlencoded({
    extended: true }));

app.use(express.json());

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/index.html"));
// });

// app.get("/notes", function (req, res){
//     res.sendFile(path.join(__dirname, "/notes.html"));
// })

// // Setup rout for GET nad POST functions

// app.route("/api/notes")
// .get(function(req, res) {
//     res.json(database);
// })

// .post(function(req, res) {
//     let jsonPath = path.join(__dirname, "/db/db.json");
//     let note = req.body;
//     let highID = 100;

//     for(let i = 0; i < database.length; i++) {
//         let singleNote = database[i];

//         if (singleNote.id > highID) {
//             highID = singleNote.id;
//         }
//     }

//     note.id = highID + 1;
//     database.push(note)

//     fs.writeFile(jsonPath, JSON.stringify(database), function (err) {

//         if (err) {
//             return console.log(err);
//         }
//         console.log("Note saved!");
//     });
//     res.json(note);
// });

// Delite note function

// app.delete("/api/notes/:id", function (req, res) {
//     let jsonPath = path.join(__dirname, "/db/db.json");

//     for (let i = 0; i < database.length; i++) {

//         if (database[i].id == req.params.id) {
//             database.splice(i, 1);
//             break;
//         }
//     }

//     fs.writeFileSync(jsonPath, JSON.stringify(database), function (err) {

//         if (err) {
//             return console.log("Note delited!");
//         }
//     });
//     res.json(database);
// });

// Server listening setup
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
  