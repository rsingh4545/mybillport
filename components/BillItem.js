export default function BillItem({ name, amount, due }) {
  return (
    <div className="bill-item">
      <p><strong>{name}</strong></p>
      <p>Amount: ${amount}</p>
      <p>Due: {due}</p>
    </div>
  );
}
