
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amici di Gabry</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="flex items-center justify-between p-4 shadow-md bg-pink-50">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-16" />
            <h1 className="text-2xl font-bold text-pink-700">Amici di Gabry</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/chi-siamo" className="hover:underline text-pink-700">Chi siamo</Link>
            <Link href="/attivita" className="hover:underline text-pink-700">Attività</Link>
            <Link href="/rivista" className="hover:underline text-pink-700">Rivista</Link>
            <Link href="/contatti" className="hover:underline text-pink-700">Contatti</Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center py-10 px-4 bg-pink-100">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Un progetto di vita, una rete di speranza</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            L'Associazione Amici di Gabry promuove la solidarietà, la cultura della salute e la vicinanza ai più fragili.
          </p>
          <Link href="/chi-siamo" className="inline-block bg-pink-700 text-white px-6 py-2 rounded-full text-sm hover:bg-pink-800 transition">
            Scopri di più
          </Link>
        </section>

        {/* Sezioni */}
        <section className="py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Chi siamo", href: "/chi-siamo" },
            { label: "Attività", href: "/attivita" },
            { label: "Rivista", href: "/rivista" },
            { label: "Contatti", href: "/contatti" }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="bg-white border shadow rounded-xl p-6 text-center hover:shadow-md transition">
              <span className="text-pink-700 font-semibold">{item.label}</span>
            </Link>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t bg-gray-50">
          <p>&copy; 2025 Amici di Gabry</p>
          <p className="text-xs">Sito realizzato con Next.js e Vercel</p>
        </footer>
      </main>
    </>
  );
}
