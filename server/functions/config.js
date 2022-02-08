const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp({
  credential: admin.credential.cert({
    type: functions.config().project.type,
    project_id: functions.config().project.project_id,
    private_key_id: functions.config().project.private_key_id,
    private_key: functions.config().project.private_key.replace(/\\n/g, "\n"),
    client_email: functions.config().project.client_email,
    client_id: functions.config().project.client_id,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: functions.config().project.client_x509_cert_url,
  }),
  databaseURL: functions.config().project.database_urls,
});

const db = admin.firestore();

module.exports = db;
