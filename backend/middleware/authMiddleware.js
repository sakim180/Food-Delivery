// middlewares/authMiddleware.js

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }



  try {
    const decoded = jwt.verify(token.token, process.env.JWT_SECRET);
   
    req.body.userId = decoded.userId; // Attach user info to request
  
    next();
     
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODVjNDA3NDA2YWNhOTkxYzE4YTFjNWYiLCJlbWFpbCI6InNha2ltYWhtZWRzdW1vbkBnbWFpbC5jb20iLCJpYXQiOjE3NTE0NzExMjgsImV4cCI6MTc1MjA3NTkyOH0.jwJ7Ie4hO3EFaK1L5CseOFqh8dt4mtBYDs7Faml6TmM
