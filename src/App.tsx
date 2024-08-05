import { Provider } from 'react-redux';
import { rootStore } from './store/store';

import RoutingService from './services/routing-service';
import AuthorizationService from './services/authorization-service';

import Main from './components/Main';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

import './App.css';

const App = () => {
   return (
      <Provider store={rootStore}>
         <AuthorizationService>
            <Main>
               <RoutingService />
            </Main>
         </AuthorizationService>
      </Provider>
   );
};

export default App;
