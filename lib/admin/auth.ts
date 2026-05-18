import { SignJWT, jwtVerify } from "jose"
import bcrypt from "bcryptjs"

const getSecret = () => new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || "dev-secret-change-in-production")

export const COOKIE_NAME = "admin_token"
export const TOKEN_EXPIRY = 60 * 60 * 24 // 24 hours

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function signToken(payload: { sub: string; username: string }): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TOKEN_EXPIRY}s`)
    .sign(getSecret())
}

export async function verifyToken(token: string): Promise<{ sub: string; username: string }> {
  const { payload } = await jwtVerify(token, getSecret(), { algorithms: ["HS256"] })
  return payload as unknown as { sub: string; username: string }
}
