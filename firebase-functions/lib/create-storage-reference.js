/* eslint-disable no-console */
const admin = require('firebase-admin');

const db = admin.firestore();

/**
 * Creates a document with to reference whatever storage file was uploaded.
 *
 * @param { Object } userRecord Contains the email and uid
 */

module.exports = (object) => {
  const {
    id,
    bucket,
    size,
    timeCreated,
    name,
    contentType,
    metadata,
  } = object;
  const uid = bucket.split('/')[0];

  return db
    .collection('storage')
    .doc(id)
    .set({
      created_on: new Date(),
      created_by: uid,
      id,
      bucket,
      size,
      timeCreated,
      name,
      contentType,
      metadata,
    })
    .then(() =>
      console.log(`User ${uid} Storage Document ${id} Created`),
    )
    .catch(console.error);
};
