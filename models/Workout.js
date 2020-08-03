//need to require the models folder so that we can access the db that is being exported in the index.js file

//require moogoose library
const mongoose = require("mongoose");
//and??
const Schema = mongoose.Schema;

//create variable to hold Workout Schema
//create a more detailed schema with constraints based on workout type (resis vs cardio)
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: {
      //setting up an empty array means "anything goes" because it's a mixed array; in it can be strings, objects, etc.
      //start simple for now      
      type: []
  },
},
  //new object to declare virtuals default to true
  // {
  //   toJSON:{
  //     virtuals: true,
  //   },
  // }
);

// WorkoutSchema.virtual("totalDuration").get(function() {
//   let total = 0;
//   this.exercises.forEach(exercise => {
//     total += exercise.duration;
//   });
//   return total;
// })

// create a custom method to add totalDuration
// (or WorkoutSchema??) Workout.methods.calculateDuration = function() {
//   //create var to hold total duration
//   let total = 0;
//   this.exercises.forEach(exercises => {
//     total += exercises.duration;
//   })
//   this.totalDuration = total;
  //for each exercise in exercises
  //add duration to the total
  //set totalDuration property
//}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



