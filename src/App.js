import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import Menu from "./pages/Menu";
import Content from "./pages/Content";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      {/* <Menu></Menu> */}
      <Content></Content>
    </div>
  );
}

export default App;
