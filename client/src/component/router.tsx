import { Routes, Route } from "react-router-dom";
import MainLayout from "./mainLayout";
import Home from "./home/home";
import NotFound from "./notFound/notFound";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
