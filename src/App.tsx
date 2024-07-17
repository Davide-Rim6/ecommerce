// import "./App.css";
// import GridCard from "./components/GridCard";

// function App() {
//   return <GridCard />;
// }

// export default App;

import { BrowserRouter } from "react-router-dom";
import './App.css';
import MainRoutes from "./routes/mainRoutes";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;