import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Quote from "./pages/Quote";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Quote />} path="/quote" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
