//need to require the models folder so that we can access the db that is being exported in the index.js file

//require moogoose library
const mongoose = require("mongoose");
//and??
const Schema = mongoose.Schema;

//create variable to hold Workout Schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: {
      //setting up an empty array means "anything goes" because it's a mixed array; in it can be strings, objects, etc.
      //start simple for now      
      type: []
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

//Resistance workout example
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

//Cardio workout example
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