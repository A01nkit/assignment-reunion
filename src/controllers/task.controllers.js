import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const getTasks = asyncHandler( async (req, res) => {
    const username = req.params['username']
    const existedUser = await User.findOne({userName: username})

    if(!existedUser) {
        throw new ApiError(409, "User do not exist. hence, no operation can be done")
    }
    
    return res.status(201).json(
        new ApiResponse(200, existedUser, "User is available and you got it")
    )
    

})

export const createTask = asyncHandler( async (req, res) => {
    const {title, starttime, endtime, priority, taskstatus} = req.body

    //validation - not empty
    if (
        [title, starttime, endtime, priority, taskstatus].some((field) => 
        field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    
})