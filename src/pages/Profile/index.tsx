import { useDispatch, useSelector } from 'react-redux';
import {
   CAlert,
   CAvatar,
   CButton,
   CCard,
   CCardBody,
   CCardText,
   CCardTitle,
   CContainer,
   CRow,
} from '@coreui/react';

import { setLoggedOut } from '../../store/slices/authentication/slice';
import LocalStorageService from '../../services/storage-service';

import { LOCAL_STORAGE } from '../../services/storage-service/interfaces';
import { RootState } from '../../store/store';
import { cilHeart } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import AccountService from '../../services/account-service';
import { useQuery } from '@tanstack/react-query';
import { SORT } from '../../services/account-service/types';
import MoviesCarousel from '../../components/MoviesCarousel';

import styles from './style.module.css';

const ProfilePage = () => {
   const dispatch = useDispatch();

   const { avatar, username, id, name } = useSelector(
      (state: RootState) => state.userInfo,
   );

   const sessionId = LocalStorageService.getItem(LOCAL_STORAGE.SESSION_ID);

   const getFavoriteMoviesParams = {
      page: 1,
      language: 'en-US',
      session_id: sessionId,
      sort_by: SORT.ASC,
   };

   const { data: dataFavoriteMovies } = useQuery({
      queryKey: ['getFavoriteMovies'],
      queryFn: async () =>
         AccountService.getFavoriteMovies(getFavoriteMoviesParams),
   });

   const handleUserLogOut = () => {
      dispatch(setLoggedOut());
   };

   return (
      <CContainer
         fluid
         className={styles.container}
      >
         <CRow className={styles.profileRow}>
            <CCard className={styles.profileCard}>
               <CCardBody>
                  {avatar && (
                     <CAvatar
                        color="warning"
                        textColor="white"
                        className={styles.avatar}
                        src={`https://www.gravatar.com/avatar/${avatar.gravatar}?d=identicon`}
                        size="xl"
                     ></CAvatar>
                  )}

                  <CCardTitle>{username}</CCardTitle>

                  <CCardText>Name: {name}</CCardText>

                  <CCardText>ID: {id}</CCardText>

                  <CButton
                     color="primary"
                     href="#"
                     onClick={handleUserLogOut}
                  >
                     Logout
                  </CButton>
               </CCardBody>
            </CCard>
         </CRow>
         <CRow className={styles.favoriteMoviesRow}>
            <h3 className={styles.favoriteMoviesRowHeader}>
               <CIcon
                  className={styles.favoriteMoviesRowHeaderIcon}
                  icon={cilHeart}
                  height={22}
               />
               Favorite Movies (
               {dataFavoriteMovies?.results &&
                  dataFavoriteMovies?.results.length}
               )
            </h3>

            {dataFavoriteMovies?.results &&
            dataFavoriteMovies?.results.length > 0 ? (
               <MoviesCarousel movies={dataFavoriteMovies?.results ?? []} />
            ) : (
               <CAlert
                  color="warning"
                  className={styles.alert}
               >
                  <h5>
                     Zatím nemáš žádný film v oblíbených, nějaký si přidej :-)
                     Stačí u filmu kliknout na
                     <CIcon
                        className={styles.alertIcon}
                        icon={cilHeart}
                        height={22}
                     />
                  </h5>
               </CAlert>
            )}
         </CRow>
      </CContainer>
   );
};

export default ProfilePage;
