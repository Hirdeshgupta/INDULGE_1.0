const userController = require("../controllers/userController");
export default async function register(req, res) {
  switch (req.method) {
    case "POST": {
      await userController.sign_in(req, res);
    }
  }
}
