import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import Menu from "./pages/Menu";
import Treats from './pages/Treats';
import Content from "./pages/Content";
import Process from "./pages/Process";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div id="app_content">
        <Home></Home>
      {/* <Menu></Menu> */}
      <Content></Content>
      <Treats></Treats>
      <Process></Process>
      <Gallery></Gallery>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
