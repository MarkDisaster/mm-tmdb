import {
   CContainer,
   CHeader,
   CHeaderBrand,
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
               <CHeaderBrand
                  className={styles.headerLogo}
                  href="#"
               >
                  MM TMDB App
               </CHeaderBrand>
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
               <CHeaderNav className="mt-2">
                  <CNavItem>
                     <Link to="/login">Přihlášení</Link>
                  </CNavItem>
               </CHeaderNav>
               <div className="mt-2">
                  <ThemeSwitchButton />
               </div>
            </CContainer>
         </CHeader>
      </>
   );
};

export default Header;
