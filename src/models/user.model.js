import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userTasks: [
        {
            type: Schema.types.ObjectId,
            ref: task
        }
    ]
})


export const User = mongoose.model("User", userSchema)