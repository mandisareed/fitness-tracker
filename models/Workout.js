//need to require the workout model (bcuz that has the db info bxuz it's requiring the...?)

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: {
      //setting up an empty array means "anything goes" because it's a mixed array. read into this again
      type: []
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// {
//     day: new Date(new Date().setDate(new Date().getDate() - 10)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   }

//   {
//     day: new Date(new Date().setDate(new Date().getDate() - 7)),
//     exercises: [
//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
//     ]
//   }