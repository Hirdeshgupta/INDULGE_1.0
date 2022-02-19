import auth from "../../drive/auth";

import createFolder from "../../helpers/createFolder";

/*

Structure:
    companyName:
        - DS Role:
            - JNF
            - INF
        - SDE Role:
            - JNF
            - INF
*/

export default async function handler(req, res) {
  const { companyName } = req.query;

  // create root folder [Company Specific]
  const response = await createFolder(
    auth,
    process.env.ROOTFOLDERID,
    companyName
  );

  if (response.id) {
    // company root folder created
    res.status(200).json({ id: response.id });
  } else {
    res.status(response.status).json(response.error);
  }
}
