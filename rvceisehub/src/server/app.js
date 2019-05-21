//Std packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//Database specific packages
const mongoose = require("mongoose");

const app = express();
const Event = require("./models/event");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Mongo Connection
const mongoURI = "mongodb+srv://suma:rhGUzXBm88LtIuBV@cluster0-qxkpd.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoURI).then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

//CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

//Routes
app.get("/events", (req, res, next) => {
  Event.find().then(documents => {
      res.status(200).json({
          message: "Events fetched successfully!",
          events: documents
      });
  });
});

app.post("/events", (req, res, next) => {
    console.log("On server side: "+req.body.title);
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        venue: req.body.venue,
        date: req.body.date,
        time: req.body.time,
        category: req.body.category,
        rating: 0,
        //registered: ""
    });
    
    event.save().then(createdEvent => {
      res.status(201).json({
        message: "Event added successfully",
        eventId: createdEvent._id
      });
    });
});

app.delete("/events/:id", (req, res, next) => {
  console.log("Delete request for id: " + req.body.title);
  Event.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Post deleted!"});
  });
});

module.exports = app;
