const Workout = require("../models/Workout");
const express = require("express");

//create a get route for /api/workouts that returns all workout data(or at least the last workout's data)
module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send("Error");
        })
    });

    //create a put route for /api/workouts/id to add an exercise to an existing workout
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate( req.params.id,
            { $push: {exercises: req.body} },
            {new: true})
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.send("Error");
                console.log("Error in adding exercise")
            })
        });



    //create a post route for /api/workout to add (post) a workout
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send("Error");
            console.log("Error in adding a new workout")
        })
    })

    //create a route to get workouts in specific time range
};