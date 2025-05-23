import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import Home from './pages/Home';
import Checkout from './pages/checkout';
import Invoice from "./pages/Invoice"
import SubscribeToBusiness from './pages/SubscribeToBusiness';
import SubsInvoice from './pages/SubsInvoice';
import GeneralInvoice from './pages/GeneralInvoice';


function App() {
  return (
    <Router>
      <div>
        <Routes>  {/* Replace 'Switch' with 'Routes' */}
          <Route path="/" element={<Home />} />  {/* Use 'element' prop instead of 'component' */}
          <Route path="/checkout" element={<Checkout />} /> {/* Use 'element' prop */}
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/generalinvoice" element={<GeneralInvoice />} />
          <Route path="/subscribe" element={<SubscribeToBusiness />} />
          <Route path="/SubsInvoice" element={<SubsInvoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
