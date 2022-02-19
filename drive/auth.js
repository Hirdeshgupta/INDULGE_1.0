import { GoogleAuth } from "google-auth-library";

// Request full drive access.
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const credential = {
  type: process.env.GDTYPE,
  project_id: process.env.GDPROJECT_ID,
  private_key_id: process.env.GDPRIVATE_KEY_ID,
  private_key: process.env.GDPRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.GDCLIENT_EMAIL,
  client_id: process.env.GDCLIENT_ID,
  auth_uri: process.env.GDAUTH_URI,
  token_uri: process.env.GDTOKEN_URI,
  auth_provider_x509_cert_url: process.env.GDAUTH_PROVIDER_URL,
  client_x509_cert_url: process.env.GDCLIENT_CERT_URL,
};

// Create a service account initialize with the service account key file and scope needed
const auth = new GoogleAuth({
  credentials: credential,
  scopes: SCOPES,
});

export default auth;
