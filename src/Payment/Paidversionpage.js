// PaidVersionPage.js
import React from 'react';
import { usePayment } from './paymentContext'; // Update the path accordingly

const PaidVersionPage = () => {
  // Use the usePayment hook to check if the user has paid
  const paymentContext = usePayment();

  // Check if paymentContext is not undefined and has the hasPaid property
  if (!paymentContext || !paymentContext.hasPaid) {
    // Redirect or handle the case where the user hasn't paid
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You need to pay to access this content.</p>
      </div>
    );
  }

  // If user has paid, render the paid content
  return (
    <div>
      <h2>Paid Version Page</h2>
      <p>This is the paid version content.</p>
    </div>
  );
};

export default PaidVersionPage;
