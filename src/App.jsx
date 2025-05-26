import "./App.css";
import Home from "./components/home/Home.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
function App() {
  return (
    <div className="container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
