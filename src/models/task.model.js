import mongoose, {Schema} from "mongoose"

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
  
})

export const Task = mongoose.model("Task", taskSchema)