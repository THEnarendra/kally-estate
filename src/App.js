import Navbar from "./Components/Header/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Apartments from "./Components/Apartments/Apartments";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import BlogPage from "./Components/BlogPage/BlogPage";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/:id" element={<Apartments />} />
				<Route path="/:route/:id" element={<PropertyDetails />} />
        		<Route path="/blog" element={<BlogPage />} />
        		<Route path="/blog/:slug" element={<BlogDetails />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
