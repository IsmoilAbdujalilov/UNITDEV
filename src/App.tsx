import Error from "pages/Error";
import Loader from "components/Loader";
import { lazy, Suspense } from "react";
import { Footer, Header } from "components";
import { Route, Routes } from "react-router-dom";
import InformationAbout from "pages/InformationAbout";

const App = () => {
  const Home = lazy(() => import("pages/Home"));

  return (
    <Suspense fallback={<Loader />}>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/pages/information/:id" element={<InformationAbout />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Suspense>
  );
};

export default App;
