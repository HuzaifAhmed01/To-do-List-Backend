import express from 'express';
import { AllTaskDeleteController, findingAllTaskControllers, taskCreateController, taskDeleteController, taskfindingController, taskUpdateController} from '../controllers/taskController.js';


const taskRoutes = express.Router();

taskRoutes.get('/findTask/:taskNumber',taskfindingController)
taskRoutes.get('/findAllTask',findingAllTaskControllers)
taskRoutes.post('/createTask',taskCreateController);
taskRoutes.put('/updateTask',taskUpdateController);
taskRoutes.delete('/deleteTask/:taskNumber',taskDeleteController);
taskRoutes.delete('/deleteAllTask',AllTaskDeleteController)


export default taskRoutes;