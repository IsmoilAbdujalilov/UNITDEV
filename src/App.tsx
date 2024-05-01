import Routes from "routes/Routes";
import { lazy, Suspense } from "react";
import { ERROR, HOME, INFORMATION_ABOUT } from "routes/path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Error = lazy(() => import("pages/Error"));
  const InformationAbout = lazy(() => import("./pages/InformationAbout"));

  const routes = createBrowserRouter([
    {
      path: HOME,
      element: <Routes />,
      children: [
        {
          path: HOME,
          element: <Home />,
        },
        {
          path: INFORMATION_ABOUT,
          element: <InformationAbout />,
        },
      ],
    },
    {
      path: ERROR,
      element: <Error />,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
