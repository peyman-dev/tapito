import { genSalt, hash } from "bcryptjs"

const hashPassword = async (password) => {
    const salt = await genSalt(12)
    const hashedPassword = await hash(password, salt)
    return hashedPassword
}

export default hashPassword