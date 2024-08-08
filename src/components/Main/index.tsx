import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { MainProps } from './interfaces';

import styles from './style.module.css';

const Main = ({ children }: MainProps) => {
   const isDarkThemeState = useSelector((state: RootState) => state.darkTheme);

   return (
      <main
         data-bs-theme={isDarkThemeState ? 'dark' : 'light'}
         className={styles.main}
      >
         {children}
      </main>
   );
};

export default Main;
