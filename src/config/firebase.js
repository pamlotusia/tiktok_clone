import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCbe1CMXoazt2mI_2X1wdLIaZ21BWRVFCs',
  authDomain: 'tiktok-clone-566e5.firebaseapp.com',
  projectId: 'tiktok-clone-566e5',
  storageBucket: 'tiktok-clone-566e5.appspot.com',
  messagingSenderId: '669178548931',
  appId: '1:669178548931:web:44a5705a478e7c46bf4876'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
