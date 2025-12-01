import "./App.css";
import Projects from "./pages/Projects";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route
                    index
                    element={
                        <>
                            <Home />
                        </>
                    }
                />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        )
    );

    return (
        <div className="pages-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
