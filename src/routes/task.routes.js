import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";

const router = Router()

router.route("/:username")
.get(getTasks)
.post(createTask)

router.route("/:username/:taskid")
.delete(deleteTask)
.patch(updateTask)


export default router