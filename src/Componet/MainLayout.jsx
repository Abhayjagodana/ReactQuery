import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

const MainLayout = () => {
    return (
        <div >
            <Header />
            <div className="flex justify-center mt-8">
                <Outlet />
            </div>

            <div className="flex justify-center mt-8">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
