
export default function Rivista() {
  const copertine = ["/60.png", "/61.png", "/62.png", "/63.png", "/81.jpg"];

  return (
    <main className="p-6 font-sans text-gray-800">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Rivista</h1>
      <div className="grid grid-cols-2 gap-4">
        {copertine.map((src, i) => (
          <div key={i} className="shadow rounded-xl overflow-hidden">
            <img src={src} alt={`Copertina ${i}`} className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
