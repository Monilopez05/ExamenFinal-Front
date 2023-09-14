
import { Outlet } from "react-router-dom/dist";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div className="App">
        <Navbar/>
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="dentistas/:id" element={<Detail />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="favs" element={<Favs />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
