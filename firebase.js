import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC7X3UCgbWCtl0FMjhBqgy5dvq4clYXB_Y",
  authDomain: "pcrapidchecker-p1.firebaseapp.com",
  projectId: "pcrapidchecker-p1",
  storageBucket: "pcrapidchecker-p1.firebasestorage.app",
  messagingSenderId: "1097455415689",
  appId: "1:1097455415689:web:654ddea27d63f79b927158",
  measurementId: "G-0SDZED0ELF"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app