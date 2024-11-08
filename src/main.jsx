import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthContextProvider from './contexts/AuthContext';
import OrderContextProvider from './contexts/orderContext';
import PurchaseContextProvider from './contexts/PurchaseContext.jsx';
import PlanContextProvider from './contexts/PlanContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <OrderContextProvider>
    <PurchaseContextProvider>
    <PlanContextProvider>
      <App />
      </PlanContextProvider>
      </PurchaseContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
