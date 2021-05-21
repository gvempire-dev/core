/* eslint-disable no-console */
const admin = require('firebase-admin');

const db = admin.firestore();

/**
 * Creates a document with ID -> uid in the `users` collection on account creation.
 *
 * @param { Object } userRecord Contains the email and uid
 */

module.exports = async (userRecord) => {
  const { email, uid } = userRecord;

  try {
    // create user document
    await db
      .collection('users')
      .doc(uid)
      .set({
        email,
        created_by: uid,
        created_on: Date.now(),
      });

    // create plps document
    await db
      .collection('plps')
      .doc(uid)
      .set({
        created_by: uid,
        created_on: Date.now(),
      });

    return console.log(`User ${userRecord.uid} Document: Created`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
