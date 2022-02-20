const mongoose = require("mongoose");
const userHandlers = require("../api/controllers/userController");
export default async function addUsers(req, res) {
  switch (req.method) {
    case "GET": {
      try {
        await userHandlers.loginRequired(req, res);
        await userHandlers.profile(req, res);
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }

    case "POST": {
      let { db } = await connectToDatabase();
      await db.collection("users").insertOne(JSON.parse(req.body));
      return res.json({
        message: "Post added successfully",
        success: true,
      });
    }
  }
}
