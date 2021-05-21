const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

module.exports = {
  authOnCreate: functions.auth
    .user()
    .onCreate(require('./lib/create-profile')),
  authOnDelete: functions.auth
    .user()
    .onDelete(require('./lib/delete-profile')),
  onUserUpdate: functions.firestore
    .document('users/{userID}')
    .onUpdate(require('./lib/replace-username')),
};
