import {
   CAvatar,
   CContainer,
   CHeader,
   CHeaderNav,
   CNavItem,
} from '@coreui/react';
import { Link } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';
import SearchForm from '../SearchForm';

import styles from './style.module.css';

const Header = () => {
   return (
      <>
         <CHeader className={styles.headerWrapper}>
            <CContainer
               fluid
               className={styles.headerConteiner}
            >
               <Link
                  to="/"
                  className={styles.headerLogo}
               >
                  MM TMDB App
               </Link>
               <CHeaderNav className={styles.headerNav}>
                  <CNavItem>
                     <Link to="/">Home</Link>
                  </CNavItem>
                  <CNavItem>
                     <Link to="/movies-comparing">Porovnej filmy</Link>
                  </CNavItem>
                  <CNavItem>
                     <Link to="/profile">Uživatelský profil</Link>
                  </CNavItem>
               </CHeaderNav>
               <SearchForm />

               <div className={styles.headerLoginSwitchTheme}>
                  <CHeaderNav className="mt-1">
                     <CNavItem>
                        <Link to="/login">
                           Log In
                           <CAvatar
                              color="warning"
                              textColor="white"
                              className="ms-2 mb-1"
                           >
                              MM
                           </CAvatar>
                        </Link>
                     </CNavItem>
                  </CHeaderNav>
                  <ThemeSwitchButton />
               </div>
            </CContainer>
         </CHeader>
      </>
   );
};

export default Header;
