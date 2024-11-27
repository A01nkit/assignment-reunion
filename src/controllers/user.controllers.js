import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const createUser = asyncHandler( async (req, res) => {
    
    const {username} = req.body
    //validation - not empty
    if (
        [username].some((field) => 
        field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    //check if user already exist: username
    const existedUser = await User.findOne({ username })
    if (existedUser) {
        throw new ApiError(409, "User with username already existed try another username")
    }

    
    //create user object - create entry call in db
    const user = await User.create({
        userName: username.ToLowerCase()
    })
    console.log(typeof username);

    const createdUser = await User.findById(user._id)
    
    //check for user creation
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    //return res if created 
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )
})