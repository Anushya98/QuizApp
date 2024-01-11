import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [hasPaid, setHasPaid] = useState(false);

  const updatePaymentStatus = (status) => {
    setHasPaid(status);
  };

  return (
    <PaymentContext.Provider value={{ hasPaid, updatePaymentStatus }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  return useContext(PaymentContext);
};
