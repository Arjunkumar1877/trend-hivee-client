import { initializeApp, getApps } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)
const isTest = process.env.NODE_ENV === 'test'
export const firebaseAuth = isTest ? ({} as ReturnType<typeof getAuth>) : getAuth(app)
export const firebaseStorage = isTest
  ? ({} as ReturnType<typeof getStorage>)
  : getStorage(app)

