import Container from "components/Container";
import Navbar from "components/Navbar";
import Rodape from "components/Rodape";
import About from "pages/About";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>

      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
