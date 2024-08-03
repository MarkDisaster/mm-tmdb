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
            />

            <Route
               path="/profile"
               element={isUserLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
               path="/movies-comparing"
               element={<MoviesComparingPage />}
            />
            <Route
               path="/movie/:id"
               element={<MoviePage />}
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
