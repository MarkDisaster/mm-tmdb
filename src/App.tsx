import { Provider } from 'react-redux';
import { rootStore } from './store/store';

import Main from './components/Main';

import './App.css';
import RoutingService from './services/routing-service';
import AuthorizationService from './services/authorization-service';

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
