import jwt from "jsonwebtoken";

export const getDataFromToken = (req) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.JWT);
    return { id: decodedToken.id, isAdmin: decodedToken.isAdmin };
  } catch (err) {
    throw new Error(err.message);
  }
};
