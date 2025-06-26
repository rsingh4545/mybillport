import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">MyBillPort</h1>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-center">Pay your bills — faster, smarter, safer.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">All Your Bills. One App.</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No more juggling websites — electricity, gas, water, mobile — all in one tap.
          </p>
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Electricity</h3>
            <p className="text-gray-600">Hydro One, Alectra, and more</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gas</h3>
            <p className="text-gray-600">Enbridge, Union Gas, etc.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">💧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Water</h3>
            <p className="text-gray-600">City water bills made simple</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile</h3>
            <p className="text-gray-600">Bell, Rogers, Fido, etc.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 MyBillPort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
