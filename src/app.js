import express, { urlencoded } from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

// configuring, what type of date we can get and other configurations.
app.use(express.json({limit: "20kb"}))//json data from frontend
app.use(express.urlencoded({extended: true, limit: "20kb"}))//data from url

//Routes import
import userRouter from "./routes/user.routes.js"
import userTasks from "./routes/task.routes.js"

//Routes declarration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", userTasks)



export { app } 