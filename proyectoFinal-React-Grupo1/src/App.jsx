// import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AdminMovies from "./Adminmovies";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <AdminMovies />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
