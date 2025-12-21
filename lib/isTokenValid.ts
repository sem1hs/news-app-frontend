import jwt, { JwtPayload } from "jsonwebtoken";

type JwtToken = JwtPayload & {
  roles: ["ROLE_ADMIN" | "ROLE_USER"];
  sub: string;
};

export function verifyJwt(token: string): JwtToken | null {
  try {
    const base64Secret = process.env.SECRET_KEY!;
    const secret = Buffer.from(base64Secret, "base64");

    return jwt.verify(token, secret) as JwtToken;
  } catch (error) {
    console.error("Token doğrulanırken hata oluştu ! " + error);
    return null;
  }
}
