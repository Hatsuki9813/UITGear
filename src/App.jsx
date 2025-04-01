import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import "./index.css";

function App() {
    return (
        <div
            className="AppContainer"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}
        >
            <div className="HeaderContainer">
                <Header />
            </div>
            <div style={{ flex: 1, width: "100%", backgroundColor: "#ececec" }}>
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "2rem auto",
                    }}
                    className="MainContainer"
                >
                    <Outlet />
                </div>
            </div>

            <div className="FooterContainer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
