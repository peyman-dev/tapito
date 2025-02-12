import zod, { z } from "zod"


const userSchema = zod.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    fullName: z.string().min(1, { message: "Full name is required" }),
})

export default userSchema
