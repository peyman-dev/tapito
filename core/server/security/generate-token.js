import { sign } from "jsonwebtoken"


//* Payload is Email
const generateToken = payload => {
    const token = sign({ ...payload }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

    return token
}


export default generateToken