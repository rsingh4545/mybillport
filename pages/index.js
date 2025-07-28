import React from 'react';
import BillItem from '../components/BillItem';

const bills = [
  { id: 1, name: 'Hydro One', type: 'Electricity', amount: 164.5, dueDate: 'Jun 20', priority: 'urgent' },
  { id: 2, name: 'Rogers Internet', type: 'Internet', amount: 89.99, dueDate: 'Jun 25', priority: 'medium' },
  { id: 3, name: 'Enbridge Gas', type: 'Gas', amount: 76.25, dueDate: 'Jun 28', priority: 'low' },
];

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">MyBillPort Dashboard</h1>
      <div className="space-y-4">
        {bills.map((bill) => (
          <BillItem key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 
