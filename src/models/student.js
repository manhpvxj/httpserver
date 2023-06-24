import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
      required: true,
    },
    class: {
        type: String,
    }
})

export const Student = mongoose.model("Student", studentSchema);