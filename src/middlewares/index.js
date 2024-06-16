require("dotenv").config();
const jwt = require("jsonwebtoken");
class Authority {
  static async userAuth(req, res, next) {
    if (req.header("Authorization")) {
      const auth = req.header("Authorization");
      const parts = auth?.split(" ");
      const bearer = parts?.[0];
      const token = parts?.[1];
      if (bearer === "Bearer") {
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        try {
          const decoded = jwt.verify(token, !process.env.SECRET_KEY);
          console.log({ decoded });
          const { id } = decoded;
          if (!id) {
            return res.status(401).json({ message: "Access denied" });
          }
          next();
        } catch (error) {
          res.status(401).json({ message: "Invalid token" });
        }
      }
    }
  }
}
module.exports= Authority;
