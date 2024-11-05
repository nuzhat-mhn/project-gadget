import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
