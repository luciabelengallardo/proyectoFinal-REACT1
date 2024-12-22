// import "./App.css";
import "./css/home.css";
import "./css/footer.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AdminMovies from "./Adminmovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </div>
      <AdminMovies />
      <div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
