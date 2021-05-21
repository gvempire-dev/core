/* eslint-disable no-console */
const admin = require('firebase-admin');

const db = admin.firestore();
const storage = admin.storage();

/**
 * deleteProfile
 * Deletes the document with ID -> uid in the `users` collection on account deletion
 * @param { Object } userRecord Contains the email and uid
 */
module.exports = async (userRecord) => {
  const { uid } = userRecord;

  try {
    // delete user document
    await db
      .collection('users')
      .doc(uid)
      .delete();

    // delete user  files in storage
    await storage.bucket().deleteFiles({ prefix: `${uid}/` });

    // delete user plp links
    await db
      .collection('plps')
      .where('created_by', '==', uid)
      .delete();

    // delete user shrts
    await db
      .collection('shrts')
      .where('created_by', '==', uid)
      .delete();

    // delete user username
    await db
      .collection('usernames')
      .where('created_by', '==', uid)
      .delete();

    return console.info(`Deleted user document: ${uid}`);
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};
