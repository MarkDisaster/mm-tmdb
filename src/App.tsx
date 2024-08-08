import { Provider } from 'react-redux';
import { rootStore } from './store/store';

import RoutingService from './services/routing-service';
import AuthorizationService from './services/authorization-service';

import Main from './components/Main';

import './configs/firebaseConfig';

import './App.css';

const App: React.FC = () => {
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
