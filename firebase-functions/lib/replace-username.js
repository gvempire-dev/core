const admin = require('firebase-admin');

// const serializeUsername = (username) =>
//   username
//     .split(' ')
//     .join('')
//     .toLowerCase();

module.exports = (change, context) => {
  const { before, after } = change;
  const { userID } = context.params;

  const db = admin.firestore();

  // change of username
  if (before.get('username') !== after.get('username')) {
    const batch = db.batch();

    // delete the old username document from the `usernames` collection
    if (before.get('username')) {
      // new users may not have a username value
      batch.delete(
        db.collection('usernames').doc(before.get('username')),
      );
    }

    // add a new username document
    batch.set(db.collection('usernames').doc(after.get('username')), {
      created_by: userID,
      created_on: Date.now(),
    });

    return batch.commit();
  }
  return true;
};
