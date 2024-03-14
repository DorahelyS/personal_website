//import './App.css';
import { Outlet } from "react-router-dom";

//import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;