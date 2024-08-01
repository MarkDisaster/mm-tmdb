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
import LoginPage from '../../pages/Login';
import Header from '../../components/Header';
import ProfilePage from '../../pages/Profile';

const router = (isUserLoggedIn: boolean) => {
   console.log('isUserLoggedIn', isUserLoggedIn);
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
               path="/profile"
               element={isUserLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
               path="/login"
               element={<LoginPage />}
            />
            <Route
               path="/movies-comparing"
               element={<MoviesComparingPage />}
            />
         </Route>,
      ),
   );
};

const RoutingService = () => {
   const isUserLoggedIn = useSelector(
      (state: RootState) => state.authentication,
   );

   console.log('isUserLoggedInisUserLoggedIn', isUserLoggedIn);

   return <RouterProvider router={router(isUserLoggedIn)} />;
};

export default RoutingService;
