const Workout = require("../models/Workout");
const express = require("express");

//create a get route for /api/workouts that returns all workout data
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
};