import BillItem from '../components/BillItem';
import '../styles/global.css';

export default function Home() {
  const bills = [
    { name: "Hydro", amount: 120, due: "July 7" },
    { name: "Enbridge", amount: 85, due: "July 10" },
    { name: "Wi-Fi", amount: 60, due: "July 14" },
    { name: "Credit Card", amount: 220, due: "July 5" }
  ];

  return (
    <div className="container">
      <img src="/logo.png" alt="MyBillPort Logo" style={{ width: '180px', marginBottom: '20px' }} />
      <h1>MyBillPort</h1>
      {bills.map((bill, i) => (
        <BillItem key={i} {...bill} />
      ))}
      <button className="pay-all">Pay All Now</button>
    </div>
  );
}
