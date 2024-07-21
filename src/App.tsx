import { Provider } from 'react-redux';
import { rootStore } from './store/store';

import MoviesComparingPage from './pages/MoviesComparing';

import Main from './components/Main';

import './App.css';

const App = () => {
   return (
      <Provider store={rootStore}>
         <Main>
            <MoviesComparingPage />
         </Main>
      </Provider>
   );
};

export default App;
