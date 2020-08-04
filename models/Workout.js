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
    default: new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter workout type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter workout name"
      },
      duration: {
        type: Number,
        required: "Enter workout duration"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},
  //new object to declare virtuals default to true
  {
    toJSON:{
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function() {
  
  return this.exercises.reduce((accumulator, exercise) => {
   return accumulator + exercise.duration;
  }, 0);
  // return total;
})

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



