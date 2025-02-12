'use server'

import MakeConnection from "@/core/server/connect"
import UserModel from "@/core/server/models/user"
import decodeToken from "@/core/server/security/decode-token"
import generateToken from "@/core/server/security/generate-token"
import verifyPassword from "@/core/server/security/verify-password"
import { cookies } from "next/headers"

export const getLogin = async (payload) => {
    try {
        MakeConnection()

        if (!payload.identifier || !payload.password) {
            return {
                success: false,
                message: 'Please enter your email and password'
            }
        }

        const targetUser = await UserModel.findOne({
            $or: [
                { email: payload.identifier },
                { username: payload.identifier }
            ]
        })

        if (!targetUser) {
            return {
                success: false,
                message: 'User not found'
            }
        }

        const isPasswordValid = await verifyPassword(payload.password, targetUser.password)

        if (!isPasswordValid) {
            return {
                success: false,
                message: "Invalid data"
            }
        }

        const token = generateToken({
            email: targetUser.email,
        })

        const cookieStore = await cookies()

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        })

        return {
            success: true,

            message: 'Login successfully',
            data: {
                accessToken: token
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'Login failed'
        }
    }
}

export const getMe = async () => {
    try {
        MakeConnection()

        const cookieStore = await cookies()
        const token = cookieStore.get("token")?.value

        if (!token) {
            return {
                success: false,
            }
        }

        const payload = decodeToken(token)
        const user = await UserModel.findOne({ email: payload.email }, "-password").lean()



        return {
            success: true,
            message: 'User fetched successfully',
            data: user
        }

    } catch (error) {
        return {
            success: false,
            message: 'Unauthorized',
            error
        }
    }
}

export const createArticle = async (payload) => {
    try {
        await MakeConnection()
        
    } catch (error) {

    }
}