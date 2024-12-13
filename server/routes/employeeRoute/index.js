import express from "express";
import { handleAddEmployee } from "../../controllers/employeeController/index.js";

const employeeRouter = new express.Router();

employeeRouter.post("/addEmployee", handleAddEmployee)  

export default employeeRouter;