/* eslint-disable react-refresh/only-export-components */
import AuthGuard from "./guards";
// import ErrorPage from './error.page'
import Login from "../features/auth/login";
import Signup from "../features/auth/signup";
import ForgotPassword from "../features/auth/forgotPassword";
// import Dashboard from "../features/dashboard/dashboard";

export const PublicRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/create-account',
        element: <Signup />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    }
];

export const ProtectedRoutes = [
    {
        path: '/dashboard',
        children: [
            {
                path: '',
                // element: <Dashboard />
            }
        ]
    }
];

const allRoutes = [
    ...PublicRoutes,
    ...ProtectedRoutes,
    {
        path: '*',
        element: <Login />
    },
];

const appRoutes = allRoutes.map((route) => {
    if (route.guarded && route.element) {
      route.element = AuthGuard({ component: route.element });
    }
  
    if (route.guarded && route.children && route.children.length) {
      route.children = route.children.map(childRoute => {
        return {
          ...childRoute,
          element: < AuthGuard component={childRoute.element} />
        }
      });
    }
    return route;
  });
  
  export default appRoutes;