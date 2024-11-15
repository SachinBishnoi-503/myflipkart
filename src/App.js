import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/phoneDetail/ProductDetail";
import HomePage from "./components/HomePage";
import BuyNowForm from "./components/common/BuyNowForm";
import OrderSummary from "./components/common/OrderSummary";
import Payment from "./components/common/Payment";

function App() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/buy-now/:id" element={<BuyNowForm />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
