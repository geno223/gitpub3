// DEPENDENCIES

//import the express library
const express = require("express")
const drinks = require("./models/drinks.js")


// Create Express Application Object
const app = express()


// MIDDLEWARE//




// ROUTES//

app.get("/", (req, res) => {

    res.send("<h1>Hello World</h1>")
})
//INDEX
app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})


// SHOW
// get request to /drinks/:id

app.get("/drinks/:id", (req, res) => {
    
    const id = req.params.id
    
    const drink = drinks[id]
    
    res.render("show.ejs", {drink})
})



// TURNING ON SERVER LISTENER
app.listen(3000, () => {console.log("server is listening on port 3000")})