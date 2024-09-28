import mongoose from "mongoose";

let taskSchema = mongoose.Schema({
  taskNumber: Number,
  taskName: { type: String, require: true },
  date: { type: Date, require: true },
  status: {
    type: String,
    enum: ["pending", "completed", "in progress"],
    required: true,
  },
});

let taskModel = mongoose.model("taskCollection", taskSchema);

export default taskModel;
