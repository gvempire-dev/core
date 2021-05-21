
# GVEMPIRE's Firebase Config

## Table of contents

- [Quick start](#quick-start)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Quick start

- Clone down the repo
- Install deps with `yarn` or `npm install`
- Add a `.env` file in the root of each project directory
  with the contents:

```
# General
REACT_APP_NAME="gv-gcloud"
REACT_APP_DESCRIPTION="collection from gv Empire"

# Firebase
REACT_APP_FIREBASE_API_KEY=AIzaSRBMyCm830k18zpYZ5OCHANGEME
REACT_APP_FIREBASE_AUTH_DOMAIN=change-me.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://change-me.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=change-me
REACT_APP_FIREBASE_STORAGE_BUCKET=gv-gcloud.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=700c#@ng3m3
REACT_APP_FIREBASE_APP_ID=1:7009164138:web:changeme
REACT_APP_FIREBASE_MEASUREMENT_ID=G-changeMe
```

- Start development server with `yarn start`
- Run `yarn deploy` to deploy firebase functions, storage, and database

## Prerequisites

Before you begin, ensure you have met the following requirements:

<!--- These are just example requirements. Add, duplicate or remove as required --->

- You have installed the latest version of `node`, `npm`, and `yarn`

## Usage

To use gv-gcloud, use these scripts:
(if using npm, replace `yarn` with `npm run`)

`yarn lint` - lint project

`yarn format` - format project

`yarn deploy` - deploy project to firebase

`yarn predeploy` - format and lint project

`yarn deploy:database` - deploy firestore rules and indexes

`yarn deploy:functions` - deploy firebase functions

`yarn deploy:storage` - deploy firebase storage

## Directory Structure

```
gv-gcloud (root)
│
└───projects
│   │   ...boilerplates
│   │   ...custom applications
│
└───packages
│   │   internal common packages
│
└───scripts
│   │   internal scripts to make life easier
│
└───website
    │   current client facing website at gvempire.com
```

## Contact

If you want to contact me you can reach me [here](https:calendly.com/gvempire/discover) or [kj@gvempire.com](mailto:kj@gvempire.com) or vist me at [gvempire.com](https://gvempire.com).

## License

[MIT License](https://gitlab.com/gvempire/gv-gcloud/blob/a772c5143d804e91593f683ba58c21ed5e6ee346/LICENSE)

[Google License](https://gitlab.com/gvempire/gv-gcloud/blob/a772c5143d804e91593f683ba58c21ed5e6ee346/LICENSE#L26) for [`functions/lib/remove-inactive-users`](https://gitlab.com/gvempire/gv-gcloud/blob/96fe3ab51a3c475cf82f808db29f9b2172346c6e/firebase/functions/lib/remove-inactive-users.js)
