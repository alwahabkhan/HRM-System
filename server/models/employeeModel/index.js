import mongoose from "mongoose";
import userModel from './../userModel/index';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

const employeeModel = new mongoose.model("employee", employeeSchema);

export default employeeModel;