const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

// Initiliaze Firebase Admin SDK
const fireBaseApp = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
})

const adminDb = fireBaseApp.firestore()

const doc = adminDb.collection('bug').doc('bug')
doc.get().then(snapshot => {
	// downlaod the data.
	const data = snapshot.data()

	// a lot of data in the store!!!
	console.log(JSON.stringify(data, undefined, 4))

	// try to set the exact same data somewher else. Throws!
	const otherRef = adminDb.collection('bug').doc('bugTarget')
	otherRef.set(data)
})