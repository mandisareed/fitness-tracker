//require moogoose library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create variable to hold Workout Schema
//create a more detailed schema with constraints based on workout type (see resis + cardio objects)
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
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



