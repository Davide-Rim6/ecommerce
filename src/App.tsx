// import "./App.css";
// import GridCard from "./components/GridCard";

// function App() {
//   return <GridCard />;
// }

// export default App;

import { BrowserRouter } from "react-router-dom";
import './App.css';
import MainRoutes from "./routes/mainRoutes";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <MainRoutes />
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;