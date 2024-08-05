import {
   CAvatar,
   CButton,
   CCollapse,
   CContainer,
   CDropdown,
   CDropdownItem,
   CDropdownMenu,
   CDropdownToggle,
   CHeaderNav,
   CNavbar,
   CNavbarNav,
   CNavbarToggler,
   CNavItem,
} from '@coreui/react';
import { Link, useNavigate } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';
import SearchForm from '../SearchForm';

import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setLoggedOut } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';
import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { useState } from 'react';
import LoginModal from '../LoginModal';

const Header = () => {
   const navigate = useNavigate();

   const [visible, setVisible] = useState(false);

   const handleOnClickMovie = () => navigate(`/profile`);

   const dispatch = useDispatch();
   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   const { avatar, username } = useSelector(
      (state: RootState) => state.userInfo,
   );

   const [isModalVisible, setIsModalVisible] = useState(false);

   const handleUserLogOut = () => {
      dispatch(setLoggedOut());
      LocalStorageService.removeItem(LOCAL_STORAGE.SESSION_ID);
      LocalStorageService.removeItem(LOCAL_STORAGE.TOKEN_EXPIRATION_TIME);
   };

   <CButton color="primary">Launch demo modal</CButton>;
   return (
      <>
         <CNavbar
            expand="xl"
            className={styles.headerNav}
         >
            <CContainer fluid>
               <Link
                  to="/"
                  className={styles.headerLogo}
               >
                  MM TMDB App
               </Link>
               <CNavbarToggler onClick={() => setVisible(!visible)} />
               <CCollapse
                  className="navbar-collapse"
                  visible={visible}
               >
                  <CNavbarNav>
                     <CHeaderNav className={styles.headerNav}>
                        <CNavItem>
                           <Link to="/">Home</Link>
                        </CNavItem>
                        <CNavItem>
                           <Link to="/profile">About App</Link>
                        </CNavItem>
                        <CNavItem>
                           <Link to="/movies-comparing">Movies Comparing</Link>
                        </CNavItem>
                        <CNavItem>
                           <Link to="/profile">Profile</Link>
                        </CNavItem>
                     </CHeaderNav>
                  </CNavbarNav>
                  <SearchForm />

                  <div className={styles.headerLoginSwitchTheme}>
                     <LoginModal
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                     />
                     {isUserLoggedIn ? (
                        <>
                           <CDropdown
                              variant="nav-item"
                              className={styles.usernameDropDown}
                           >
                              <CDropdownToggle
                                 color="secondary"
                                 className={styles.headerUserName}
                              >
                                 {username}
                                 <CAvatar
                                    color="warning"
                                    textColor="white"
                                    className="ms-2 mb-1"
                                    src={`https://www.gravatar.com/avatar/${avatar}?d=identicon`}
                                 ></CAvatar>
                              </CDropdownToggle>
                              <CDropdownMenu
                                 className={styles.headerDropDownSwitchTheme}
                              >
                                 <CDropdownItem onClick={handleOnClickMovie}>
                                    Profile
                                 </CDropdownItem>
                                 <CDropdownItem
                                    onClick={handleUserLogOut}
                                    className={styles.logoutButton}
                                 >
                                    Logout
                                 </CDropdownItem>
                              </CDropdownMenu>
                           </CDropdown>
                        </>
                     ) : (
                        <CButton
                           className="p-0"
                           onClick={() => setIsModalVisible(!isModalVisible)}
                        >
                           Login
                           <CAvatar
                              color="warning"
                              textColor="white"
                              className="ms-2 mb-1"
                           >
                              MM
                           </CAvatar>
                        </CButton>
                     )}
                     <ThemeSwitchButton />
                  </div>
               </CCollapse>
            </CContainer>
         </CNavbar>
      </>
   );
};

export default Header;
