import employeeModel from "../../models/employeeModel/index.js";

const handleAddEmployee = async (req, res) => {
    const { name, email, position, department, hireDate, salary, status } = req.body;
    try {
        const newEmployee = new employeeModel({
            name: name,
            email: email,
            position: position,
            department: department,
            hireDate: hireDate,
            salary: salary,
            status: status,
        })

        const employeeDetails = await newEmployee.save();
        res.json({ success: true, employeeDetails })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { handleAddEmployee}