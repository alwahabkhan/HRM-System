import express from "express";
import { handleAddEmployee, handleUpdateEmployee, handleDeleteEmployee } from "../../controllers/employeeController/index.js";

const emplpoyeeRouter = new express.Router();

emplpoyeeRouter.post("/addEmployee", handleAddEmployee);

emplpoyeeRouter.put("/updateEmployee/:id", handleUpdateEmployee)

emplpoyeeRouter.delete("/deleteEmployee/:id", handleDeleteEmployee)

export default emplpoyeeRouter;
