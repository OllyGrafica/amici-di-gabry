
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amici di Gabry</title>
      </Head>
      <main className="p-6 font-sans text-gray-800">
        <header className="text-center mb-6">
          <img src="/logo.png" alt="Logo Amici di Gabry" className="mx-auto h-20" />
          <h1 className="text-3xl font-bold text-pink-600">Amici di Gabry</h1>
        </header>

        <section className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/chi-siamo" className="bg-pink-100 p-4 rounded-xl text-center shadow hover:bg-pink-200 transition">Chi siamo</Link>
          <Link href="/attivita" className="bg-pink-100 p-4 rounded-xl text-center shadow hover:bg-pink-200 transition">Attività</Link>
          <Link href="/rivista" className="bg-pink-100 p-4 rounded-xl text-center shadow hover:bg-pink-200 transition">Rivista</Link>
          <Link href="/contatti" className="bg-pink-100 p-4 rounded-xl text-center shadow hover:bg-pink-200 transition">Contatti</Link>
        </section>

        <footer className="text-center text-sm text-gray-500">
          &copy; 2025 Amici di Gabry
        </footer>
      </main>
    </>
  );
}
