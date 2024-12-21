// import "./App.css";
import "./css/home.css";
import "./css/footer.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen";
import AdminScreen from "./pages/AdminScreen";
import LoginScreen from "./pages/LoginScreen";
import AboutUsScreen from "./pages/AboutUsScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/*" element={<ErrorScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Admin" element={<AdminScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
