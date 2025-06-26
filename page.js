
export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <img src="/logo.png" alt="MyBillPort Logo" className="logo" />
        <h1>Welcome back to MyBillPort</h1>
      </header>
      <section className="balance">
        <h2>Total Balance</h2>
        <p>$1,250.00</p>
      </section>
      <section className="bills">
        <h3>Upcoming Bills</h3>
        <ul>
          <li><img src="/icons/hydro.png" /> Hydro - $80</li>
          <li><img src="/icons/water.png" /> Water - $45</li>
          <li><img src="/icons/internet.png" /> Internet - $60</li>
        </ul>
        <button>Pay All</button>
      </section>
      <footer className="footer-nav">
        <nav>
          <a href="#">Home</a>
          <a href="#">History</a>
          <a href="#">Profile</a>
        </nav>
      </footer>
    </main>
  );
}
