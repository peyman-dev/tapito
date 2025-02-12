import MakeConnection from "@/core/server/connect"
import UserModel from "@/core/server/models/user"
import generateToken from "@/core/server/security/generate-token"
import hashPassword from "@/core/server/security/hash-password"
import userSchema from "@/core/validations/user.schema"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    await MakeConnection()
    try {
        const user = await req.json()

        const { success, data, error } = userSchema.safeParse(user)

        if (!success) {
            return NextResponse.json({
                message: "Please fill all the fields",
                error: error.flatten().fieldErrors,
            }, {
                status: 400
            })
        }

        const isUserExist = await UserModel.findOne({
            $or: [{
                username: data.username
            }, {
                email: data.email
            }]
        })


        if (isUserExist) {
            return NextResponse.json({
                message: "User already exists"
            }, {
                status: 422
            })
        }

        const hashedPassword = await hashPassword(data.password)

        const token = generateToken({
            email: data.email
        })  


        const newUser = new UserModel({
            ...data,
            password: hashedPassword
        })
        await newUser.save()

        if (!newUser) {
            return NextResponse.json({
                message: "Failed to create account for user"
            }, {
                status: 500
            })
        }

        return NextResponse.json({
            data: {
                accessToken: token,
                user: newUser
            },
            message: "Account created successfully"

        }, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error",
            error: error.message,
        }, {
            status: 500
        })
    }
}