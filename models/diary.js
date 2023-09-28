const { Schema, model } = require("mongoose");

// Schema for the FoodItem
const foodItemSchema = new Schema(
  {
    title: {
      type: String,
      
    },
    weight: {
      type: Number,
      
    },
    calories: {
      type: Number,
      
    },
  },
  { versionKey: false, timestamps: true }
);

// Schema for a single diary entry
const diaryEntrySchema = new Schema(
  {
    date: {
      type: String,
      
    },
    dailyRate: {
      type: Number,
      default: 0,
    },
    foodItems: [foodItemSchema], // An array of food items for the day
  },
  { versionKey: false, timestamps: true }
);

// Schema for the entire diary (collection of diary entries)
const diarySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    entries: [diaryEntrySchema], // An array of diary entries for the user
  },
  { versionKey: false, timestamps: true }
);

const Diary = model("diary", diarySchema);

module.exports = { Diary };
