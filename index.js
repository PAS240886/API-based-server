// importing express and axios

import express from "express";
import axios from "axios";

const app = express ();
const port = 3000;

// using the public folder for static files
app.use(express.static("public"));

//Render index.ejs when user goes to the home page
app.get("/", async (req, res)=> {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {secret: result.data.secret, user: result.data.username});
    }   catch (error) {
        console.log (error.response.data);
        res.status(500);
    }
});


app.listen (port, ()=> {
    console.log ("Server has started")
});

