import { useDispatch } from 'react-redux';
import { CFormSwitch } from '@coreui/react';

import { toggleDarkTheme } from '../../store/slices/darkTheme/slice';

import styles from './style.module.css';

const ThemeSwitchButton = () => {
   const dispatch = useDispatch();

   const handleToggleDarkTheme = () => dispatch(toggleDarkTheme());

   return (
      <CFormSwitch
         label="Dark Theme"
         id="ThemeSwitchButton"
         className={styles.switchButton}
         onClick={handleToggleDarkTheme}
      />
   );
};

export default ThemeSwitchButton;
