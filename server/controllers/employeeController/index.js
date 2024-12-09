import employeeModel from "../../models/employeeModel";

const handleAddEmployee = async (req, res) => {
    const { name, email, position, department, hireDate, salary, status } = req.body;
    try {
        const newEmployee = new employeeModel({
            name: name,
            email: email,
            positon: position,
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