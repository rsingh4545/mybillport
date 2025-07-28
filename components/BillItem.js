import React from 'react';
import { CreditCard, CheckCircle } from 'lucide-react';

const BillItem = ({ bill }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'urgent': return 'from-red-600 to-red-700';
      case 'medium': return 'from-orange-500 to-orange-600';
      case 'low': return 'from-green-500 to-green-600';
      default: return 'from-blue-600 to-blue-700';
    }
  };

  const getPriorityBorder = (priority) => {
    switch(priority) {
      case 'urgent': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-orange-400 bg-orange-50';
      case 'low': return 'border-green-400 bg-green-50';
      default: return 'border-blue-400 bg-blue-50';
    }
  };

  return (
    <div className={`bg-white rounded-xl p-4 shadow-md border-l-4 ${getPriorityBorder(bill.priority)} transform hover:scale-102 transition-transform`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getPriorityColor(bill.priority)} flex items-center justify-center shadow-md`}>
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-800">{bill.name}</p>
            <p className="text-sm text-gray-600">{bill.type}</p>
            <div className="flex items-center space-x-1 mt-1">
              <CheckCircle className="w-3 h-3 text-blue-600" />
              <span className="text-xs text-blue-600 font-semibold">Auto-tracked</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{bill.dueDate}</p>
          <p className="text-lg font-bold text-gray-800">${bill.amount}</p>
          <button className={`mt-2 px-4 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${getPriorityColor(bill.priority)} transform hover:scale-105 transition-transform shadow-md`}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillItem;
