#How to run
1. First, install project with `npm i`
3. Create a fresh Firebase project
2. We need to have `firebaseConfig.ts` in the root of the project which contains `apiKey`, `authDomain`, `projectId` etc. We also need a `serviceAccountKey.json` in the root of the project to access via. the admin sdk.
2. Now you can run `npx vite run`
3. This opens a webserver where the client sdk is hooked up the a "Set data" button. Press it, and it will set problematic data to a document located at "data/bug". (No security rules should prevent this)
7. Now run `node firestoreAdmin.js`. This simple script will download the data at "data/bug" and attempt to set it to "data/bugTarget". This will fail!