/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * MODIFIED by <kj@gvempire.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const admin = require('firebase-admin');
const promisePool = require('es6-promise-pool');

const auth = admin.auth();
const { PromisePool } = promisePool;
// Maximum concurrent account deletions.
const MAX_CONCURRENT = 3;
// Threshold for inactivity in days
const THRESHOLD = 90;

// SETUP_START
/**
 * Deletes one inactive user from the list.
 */
const deleteInactiveUser = (inactiveUsers) => {
  if (inactiveUsers.length > 0) {
    const userToDelete = inactiveUsers.pop();

    // Delete the inactive user.
    return (async () => {
      try {
        await auth.deleteUser(userToDelete.uid);

        console.log(
          'Deleted user account',
          userToDelete.uid,
          'because of inactivity',
        );
      } catch (error) {
        throw new Error(
          'Deletion of inactive user account',
          userToDelete.uid,
          'failed:',
          error,
        );
      }
    })();
  }

  return null;
};

/**
 * Returns the list of all inactive users.
 */
const getInactiveUsers = (users = [], nextPageToken) => {
  return (async () => {
    try {
      const result = await auth.listUsers(1000, nextPageToken);
      // Find users that have not signed in in the last 30 days.
      const inactiveUsers = result.users.filter(
        (user) =>
          Date.parse(user.metadata.lastSignInTime) <
          Date.now() - THRESHOLD * 24 * 60 * 60 * 1000,
      );

      // Concat with list of previously found inactive users if there was more than 1000 users.
      // eslint-disable-next-line no-param-reassign
      users = users.concat(inactiveUsers);

      // If there are more users to fetch we fetch them.
      if (result.pageToken) {
        return getInactiveUsers(users, result.pageToken);
      }

      return users;
    } catch (error) {
      throw new Error(error);
    }
  })();
};
// SETUP_END

/**
 * removeInactiveUsers
 * Removes users that have been inactive for `THRESHOLD` days
 */
module.exports = () => {
  return (async () => {
    try {
      // Fetch all user details.
      // eslint-disable-next-line no-use-before-define
      const inactiveUsers = await getInactiveUsers();
      // Use a pool so that we delete maximum `MAX_CONCURRENT` users in parallel.
      const deleteUsersPromisePool = new PromisePool(
        // eslint-disable-next-line no-use-before-define
        () => deleteInactiveUser(inactiveUsers),
        MAX_CONCURRENT,
      );
      await deleteUsersPromisePool.start();
      console.log('User cleanup finished');
    } catch (error) {
      console.error(error);
    }
  })();
};
