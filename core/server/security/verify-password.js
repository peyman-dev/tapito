import { compare } from "bcryptjs";

export default async function verifyPassword(password, hashedPassword) {
 return await compare(password, hashedPassword)
}