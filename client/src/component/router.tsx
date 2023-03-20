import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout";
import Home from "./home/home";
import NotFound from "./notFound/notFound";
import About from "./about/about";
import Movies from "./movies/movies";
import Health from "./health/health";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="movies/:genreId?/:genreName?" element={<Movies />} />
      <Route path="about" element={<About />} />
      <Route path="health" element={<Health />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
