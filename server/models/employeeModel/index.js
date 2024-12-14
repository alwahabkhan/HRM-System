import mongoose from "mongoose";

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

const employeeModel = mongoose.model.employees || mongoose.model("employee", employeeSchema);

export default employeeModel;