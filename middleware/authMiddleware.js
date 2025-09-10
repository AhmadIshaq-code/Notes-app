import jwt from "jsonwebtoken";

export const AuthChecker = (req, res, next) => {
  const headers = req.headers.authorization || '';
  const token = headers.startsWith("Bearer ") ? headers.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing Token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };  //req.user.id
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired toekn" });
  }
};
