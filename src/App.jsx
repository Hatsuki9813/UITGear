
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="AppContainer">
      <div className="HeaderContainer">
        <Header />
      </div>
      <div className="MainContainer">
        <Outlet />

      </div>
      <div className="FooterContainer">
        <Footer />
      </div>

    </div>
  )
}

export default App
