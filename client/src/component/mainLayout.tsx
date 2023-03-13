import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

const MainLayout: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
