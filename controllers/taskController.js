import {
  AllTaskDeletingService,
  AllTaskFindingService,
  findTasksAtServices,
  taskCreateServices,
  taskDeletingService,
  taskUpdateService,
} from "../Services/taskServices.js";

export let taskCreateController = async (req, res) => {
  let { taskNumber, taskName, date, status } = req.body;
  try {
    let task = await taskCreateServices(taskNumber, taskName, date, status);
    if (task) {
      console.log(`task created successfully at controller ${task}`);
    } else {
      console.log(`user failed to create task ${error.message}`);
    }
    res.send(`task created successfully ${task}`);
  } catch (error) {
    res.send(`failed to create task ${error.message}`);
  }
};

export let taskUpdateController = async (req, res) => {
  let { taskNumber, taskName, date, status } = req.body;

  try {
    let updatedTask = await taskUpdateService(
      taskNumber,
      taskName,
      date,
      status
    );
    if (updatedTask) {
      console.log(`task updated successfully at controller ${updatedTask}`);
    } else {
      console.log(`task not found or failed to update task ${error.message}`);
    }
    res
      .status(200)
      .send({ message: "Task updated successfully", Task: updatedTask });
  } catch (error) {
    res.status(500).send("failed to update task " + error.message);
  }
};

export let taskfindingController = async (req, res) => {
  let { taskNumber } = req.params;

  try {
    let foundTask = await findTasksAtServices(taskNumber);
    if (foundTask) {
      console.log(`task found successfully at controller ${foundTask}`);
    } else {
      console.log(`task not found at controllers ${error.message}`);
    }
    res.send(`Task found successfully ${foundTask}`);
  } catch (error) {
    res.send(`failed to find task | please enter a valid task Number :`);
  }
};

export let findingAllTaskControllers = async (req, res) => {
  try {
    let allTasks = await AllTaskFindingService();
    if (allTasks) {
      console.log(`all tasks found successfully at controller ${allTasks}`);
    } else {
      console.log(`failed to find all tasks at controllers ${error.message}`);
    }
    res.send(`All tasks found successfully ${allTasks}`);
  } catch (error) {
    res.send(`failed to find all tasks at controllers ${error.message}`);
  }
};

export let taskDeleteController = async (req, res) => {
  try {
    let deletedTask = await taskDeletingService(req.params.taskName);
    if (deletedTask) {
      res
        .status(200)
        .send({ message: "Task deleted successfully", task: deletedTask });
    } else {
      res.status(404).send({ message: "Failed to delete task" });
    }
  } catch (error) {
    console.log(`failed to delete task at controllers ${error.message}`);
  }
};

export let AllTaskDeleteController = async (req, res) => {
  try {
    let deletedTasks = await AllTaskDeletingService();
    if (deletedTasks) {
      console.log({ message: "All tasks deleted successfully" });
    } else {
      console.log({ message: "Failed to delete all tasks " + error.message });
    }
    res.status(200).send({ message: "All tasks deleted successfully" });
  } catch (error) {
    res.status(500).send(`failed to delete all tasks`);
  }
};
