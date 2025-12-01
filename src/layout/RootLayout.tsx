import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RootLayout() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <div className="pages-container">
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;
