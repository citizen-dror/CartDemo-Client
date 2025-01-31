import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";
import OrderSummary from "./pages/OrderSummary";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/order" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
