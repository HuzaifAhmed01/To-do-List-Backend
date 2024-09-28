import taskModel from "../Models/taskModel.js";

export let taskCreateServices = async (taskNumber, taskName, date, status) => {
  try {
    let taskCreate = taskModel({ taskNumber, taskName, date, status });
    let taskSave = await taskCreate.save();
    console.log("task created successfully at services");
    return taskSave;
  } catch (error) {
    console.log(`error occured at creating task ${error.message}`);
  }
};

export let taskUpdateService = async (taskNumber, taskName, date, status) => {
  try {
    let updatedTask = await taskModel.findOneAndUpdate(
      { taskNumber },
      { taskName, date, status },
      { new: true } // Returns the updated document
    );

    console.log("task updated successfully at services");
    return updatedTask;
  } catch (error) {
    console.log(`error occured while updating task ${error.message}`);
  }
};

export let findTasksAtServices = async (taskNumber) => {
  try {
    let tasks = await taskModel.findOne({ taskNumber });
    console.log("tasks fetched successfully at services");
    return tasks;
  } catch (error) {
    console.log(`error occured while fetching tasks ${error.message}`);
  }
};

export let AllTaskFindingService = async () => {
  try {
    let tasks = await taskModel.find();
    console.log("all tasks fetched successfully at services");
    return tasks;
  } catch (error) {
    console.log(`error occured while fetching all tasks ${error.message}`);
  }
};

export let taskDeletingService = async (taskNumber) => {
  try {
    let deletedTask = await taskModel.findOneAndDelete({ taskNumber });
    console.log("task deleted successfully at services");
    return deletedTask;
  } catch (error) {
    console.log(`error occured while deleting task ${error.message}`);
  }
};

export let AllTaskDeletingService = async () => {
  try {
    let deletedTasks = await taskModel.deleteMany();
    return deletedTasks;
  } catch (error) {
    console.log(`error occured while deleting all tasks ${error.message}`);
  }
};
