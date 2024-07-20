import { Provider } from 'react-redux';
import { moviesToCompareStore } from './stores/moviesToCompare/store';

import MoviesComparingPage from './pages/MoviesComparing';
import './App.css';

const App = () => {
   return (
      <>
         <Provider store={moviesToCompareStore}>
            <MoviesComparingPage />
         </Provider>
      </>
   );
};

export default App;
