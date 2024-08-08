import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
   apiKey: 'AIzaSyBAckoDteHOnYQuSKsz2BAZqd8vtwTu2_M',
   authDomain: 'tmdbmm.firebaseapp.com',
   projectId: 'tmdbmm',
   storageBucket: 'tmdbmm.appspot.com',
   messagingSenderId: '191709921532',
   appId: '1:191709921532:web:93dcfc57d87cd8c3bd9779',
   measurementId: 'G-VMKNS50PEC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
