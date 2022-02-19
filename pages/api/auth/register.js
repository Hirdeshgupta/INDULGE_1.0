const userController = require("../controllers/userController");
export default async function register(req, res) {
  switch (req.method) {
    case "POST": {
      await userController.register(req, res);
    }
    case "GET": {
      return res.status(300).json({ ok: "okay" });
    }
  }
}
