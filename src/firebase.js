import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey:            'AIzaSyA7zLZlMx4sfBUwxXrsv2GiIYLON16o2Vo',
  authDomain:        'svj-eco-flow-systems.firebaseapp.com',
  projectId:         'svj-eco-flow-systems',
  storageBucket:     'svj-eco-flow-systems.firebasestorage.app',
  messagingSenderId: '354803185613',
  appId:             '1:354803185613:web:0121b0dca0c0d25c3e3684',
  measurementId:     'G-32VFWMHF7P',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
