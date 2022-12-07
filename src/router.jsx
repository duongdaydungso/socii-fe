import { useSelector } from "react-redux";

import { createBrowserRouter, useLocation, Navigate } from "react-router-dom";

import { pagePath } from "./utils/routeConstants";

import { selectAuth } from "./redux/auth/authSlice";

import HomePage from "./pages/home_page/HomePage";
import IntroPage from "./pages/intro_page/IntroPage";
import LoginPage from "./pages/login_page/LoginPage";
import RegisterPage from "./pages/register_page/RegisterPage";
import ErrorPage from "./pages/error_page/ErrorPage";

function RequiredAuthHomePage() {
  const currAuth = useSelector(selectAuth);

  if (currAuth && currAuth.token) return <HomePage />;

  return <IntroPage />;
}

function RequiredAuthRedirectLogin(props) {
  const currAuth = useSelector(selectAuth);

  let location = useLocation();

  if (currAuth && currAuth.token) return props.children;

  return <Navigate to={pagePath.LOGIN} state={{ from: location }} replace />;
}

function UnrequiredAuthRedirectRoot(props) {
  const currAuth = useSelector(selectAuth);

  let location = useLocation();

  if (currAuth && currAuth.token)
    return <Navigate to={pagePath.ROOT} state={{ from: location }} replace />;

  return props.children;
}

export const router = createBrowserRouter([
  {
    path: pagePath.ROOT,
    element: <RequiredAuthHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: pagePath.LOGIN,
    element: (
      <UnrequiredAuthRedirectRoot>
        <LoginPage />
      </UnrequiredAuthRedirectRoot>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: pagePath.REGISTER,
    element: (
      <UnrequiredAuthRedirectRoot>
        <RegisterPage />
      </UnrequiredAuthRedirectRoot>
    ),
    errorElement: <ErrorPage />,
  },
]);
