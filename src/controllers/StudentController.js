import { Student } from "../models/student.js";


export const getStudentInfo = async (req, res) => {
    try {
        const { studentId } = req.params;

        const student = await Student.findOne({ studentId });
        if(!student) {
            res.status(404).json("Student not found!");
            return;
        }
        res.status(200).json({
            "MSSV": student.studentId,
            "Ho va ten": student.fullName,
            "Lop": student.class,
        })
    } catch(e) {
        res.status(500).json("Server error!!!")
    }

}

