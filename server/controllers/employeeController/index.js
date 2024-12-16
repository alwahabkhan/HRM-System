import employeeModel from "../../models/employeeModel/index.js";

const handleAddEmployee = async (req, res) => {
    const { name, email, position, department, hireDate, salary, status } = req.body;
    try {
        const Employee = new employeeModel({
            name: name,
            email: email,
            position: position,
            department: department,
            hireDate: hireDate,
            salary: salary,
            status: status,
        })

        await Employee.save();
        res.json({ success: true, message: "Employee added successfully" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const handleUpdateEmployee = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const updatedEmployee = await employeeModel.findByIdAndUpdate(userId, updatedData, {
            new: true,
        })
        if (!updatedEmployee) {
            res.json({ success: false, message: "User not found" })
        }
        res.json({ success: true, message: "Employee data updated Successfully", employee: updatedEmployee })
    } catch (error) {
        res.json({ success: true, message: error.message })
    }
}

const handleDeleteEmployee = async (req,res) =>{
    try {
        const userId = req.params.id;
        const deleteEmployee = await employeeModel.findByIdAndDelete(userId);
        if(!userId){
            res.json({success:false, message:"User not found"})
        }
        res.json({ success:true, message:"Employee deleted Successfully", employee: deleteEmployee})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

export { handleAddEmployee, handleUpdateEmployee, handleDeleteEmployee }