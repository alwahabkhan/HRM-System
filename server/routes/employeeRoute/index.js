import express from "express";
import { handleAddEmployee, handleUpdateEmployee } from "../../controllers/EmployeeController/index.js";

const emplpoyeeRouter = new express.Router();

emplpoyeeRouter.post("/addEmployee", handleAddEmployee);

emplpoyeeRouter.put("/updateEmployee/:id", handleUpdateEmployee)

export default emplpoyeeRouter;
