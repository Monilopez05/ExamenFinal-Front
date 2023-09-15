import { Outlet } from "react-router-dom/dist";
import { Routes, Route,  Navigate} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";



function App() {
  const { state } = useContext(ContextGlobal);
  return (
      <div className="App">
      <div className={state.theme ? "dark" : null}></div>
        <Navbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dentist/:id" element={<Detail />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="favorito" element={<Favs />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
