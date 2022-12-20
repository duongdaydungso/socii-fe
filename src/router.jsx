import { useSelector } from "react-redux";

import { createBrowserRouter, useLocation, Navigate } from "react-router-dom";

import { pagePath } from "./utils/routeConstants";

import { selectAuth } from "./redux/auth/authSlice";

import HomePage from "./pages/home_page/HomePage";
import IntroPage from "./pages/intro_page/IntroPage";
import RegisterPage from "./pages/register_page/RegisterPage";
import ErrorPage from "./pages/error_page/ErrorPage";
import ProfilePage, { profileLoader } from "./pages/profile_page/ProfilePage";
import FriendlistPage from "./pages/friendlist_page/FriendlistPage";
import PostPage, { postLoader } from "./pages/post_page/PostPage";
import NewsfeedPage from "./pages/newsfeed_page/NewsfeedPage";
import IntroPageContent from "./pages/intro_page/IntroPageContent";

function RequiredAuthRootPage() {
  const currAuth = useSelector(selectAuth);

  if (currAuth && currAuth.token) return <HomePage />;

  return <IntroPage />;
}

function RequiredAuthHomePage() {
  const currAuth = useSelector(selectAuth);

  if (currAuth && currAuth.token) return <NewsfeedPage />;

  return <IntroPageContent />;
}

// function RequiredAuthRedirectLogin(props) {
//   const currAuth = useSelector(selectAuth);

//   let location = useLocation();

//   if (currAuth && currAuth.token) return props.children;

//   return <Navigate to={pagePath.LOGIN} state={{ from: location }} replace />;
// }

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
    element: <RequiredAuthRootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: pagePath.ROOT,
        element: <RequiredAuthHomePage />,
      },
      {
        path: pagePath.PROFILE + "/:profileID",
        loader: profileLoader,
        element: <ProfilePage />,
      },
      {
        path: pagePath.POST + "/:postID",
        loader: postLoader,
        element: <PostPage />,
      },
      {
        path: pagePath.FRIENDLIST,
        element: <FriendlistPage />,
      },
    ],
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
