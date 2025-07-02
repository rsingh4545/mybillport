
import Head from 'next/head';
import BillList from '../components/BillList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyBillPort</title>
      </Head>
      <main>
        <h1>Welcome to MyBillPort</h1>
        <BillList />
      </main>
    </div>
  );
}
