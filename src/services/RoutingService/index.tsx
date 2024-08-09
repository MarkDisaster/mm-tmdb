import {
   createBrowserRouter,
   createRoutesFromElements,
   Navigate,
   Outlet,
   Route,
   RouterProvider,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MoviesComparingPage from '../../pages/MoviesComparing';
import Header from '../../components/Header';
import ProfilePage from '../../pages/Profile';
import HomePage from '../../pages/Home';
import MoviePage from '../../pages/Movie';
import AboutAppPage from '../../pages/AboutApp';
import { getMovieByIdLoader } from '../../pages/Movie/loader';
import { profilePageLoader } from '../../pages/Profile/loader';
import { homePageLoader } from '../../pages/Home/loader';

const router = (isUserLoggedIn: boolean) => {
   return createBrowserRouter(
      createRoutesFromElements(
         <Route
            path="/"
            element={
               <>
                  <Header />

                  <Outlet />
               </>
            }
         >
            <Route
               index
               element={<HomePage />}
               loader={homePageLoader}
            />

            <Route
               path="/about-app"
               element={<AboutAppPage />}
            />

            <Route
               path="/profile"
               element={isUserLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
               loader={profilePageLoader}
            />

            <Route
               path="/movies-comparing"
               element={<MoviesComparingPage />}
            />

            <Route
               path="/movie/:id"
               element={<MoviePage />}
               loader={getMovieByIdLoader}
            />
         </Route>,
      ),
   );
};

const RoutingService = () => {
   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   return <RouterProvider router={router(isUserLoggedIn)} />;
};

export default RoutingService;
