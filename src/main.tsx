import "./assets/sass/index.scss";
import "swiper/css";
import App from "./App.tsx";
import "swiper/css/pagination";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
