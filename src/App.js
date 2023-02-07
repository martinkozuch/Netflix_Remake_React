import NavBar from "./COMPONENTS/Navbar"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </>
  );
}

export default App;
