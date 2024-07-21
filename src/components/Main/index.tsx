import { useSelector } from 'react-redux';

import { MainProps } from './interfaces';
import { DartkThemeState } from '../../store/slices/darkTheme/store';

const Main = ({ children }: MainProps) => {
   const isDarkThemeState = useSelector(
      (state: DartkThemeState) => state.darkTheme,
   );

   return (
      <main data-bs-theme={isDarkThemeState ? 'dark' : 'light'}>
         {children}
      </main>
   );
};

export default Main;
