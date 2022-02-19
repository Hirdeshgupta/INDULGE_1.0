import { google } from "googleapis";

export default async function createFolder(auth, parentID, folderName) {
  const driveService = google.drive({ version: "v3", auth });

  var fileMetadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    parents: [parentID],
  };

  let response = await driveService.files.create({
    resource: fileMetadata,
    fields: "id",
  });

  switch (response.status) {
    case 200:
      console.log("Created Folder Id: ", response.data.id);
      return { id: response.data.id };
    default:
      console.error("Error creating the file, " + response.errors);
      return { error: response.errors, status: response.status };
  }
}
