import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { MainProps } from './interfaces';

const Main = ({ children }: MainProps) => {
   const isDarkThemeState = useSelector((state: RootState) => state.darkTheme);

   return (
      <main
         data-bs-theme={isDarkThemeState ? 'dark' : 'light'}
         className="min-vh-100"
      >
         {children}
      </main>
   );
};

export default Main;
