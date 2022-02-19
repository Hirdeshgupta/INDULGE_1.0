import auth from "../../drive/auth";

import createFolder from "../../helpers/createFolder";

export default async function handler(req, res) {
  const { role, parentID } = req.query;
  const roleResponse = await createFolder(auth, parentID, role);

  if (roleResponse.id) {
    // template for role created successfully
    const JNFresponse = await createFolder(auth, roleResponse.id, "JNF");
    if (JNFresponse.error) {
      res.status(JNFresponse.status).json(JNFresponse.error);
    } else {
      const INFresponse = await createFolder(auth, roleResponse.id, "INF");
      if (INFresponse.error) {
        res.status(INFresponse.status).json(INFresponse.error);
      } else {
        res
          .status(200)
          .json({ JNF_id: JNFresponse.id, INF_id: INFresponse.id });
      }
    }
  } else {
    res.status(roleResponse.status).json(roleResponse.error);
  }
}
