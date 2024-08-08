import { Provider } from 'react-redux';
import { rootStore } from './store/store';

import RoutingService from './services/RoutingService';
import AuthorizationService from './services/AuthorizationService';

import Main from './components/Main';

import './configs/firebaseConfig';

import './App.css';

const App: React.FC = () => {
   return (
      <Provider store={rootStore}>
         <AuthorizationService>
            <Main>
               Ahoj
               <RoutingService />
            </Main>
         </AuthorizationService>
      </Provider>
   );
};

export default App;
