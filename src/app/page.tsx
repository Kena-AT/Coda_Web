export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          The Snippet Management Tool for Developers
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Fast, reliable, and secure. Manage your snippets efficiently with Coda.
        </p>
        <div className="flex space-x-4">
          <a href="#download" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Download for Windows
          </a>
        </div>
      </section>

      {/* Interface Gallery */}
      <section className="w-full bg-[#131313] py-20 px-6 border-t border-[#353534]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Interface Gallery</h2>
          <div className="h-64 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-[#353534]">
            <p className="text-gray-500">Screenshots will be here</p>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="w-full bg-[#131313] py-20 px-6 border-t border-[#353534]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#353534] h-48">
              <h3 className="text-xl font-bold mb-2">Snippet Management</h3>
              <p className="text-gray-400">Organize and find your code quickly.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#353534] h-48">
              <h3 className="text-xl font-bold mb-2">Smart Search</h3>
              <p className="text-gray-400">Instantly locate the snippet you need.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#353534] h-48">
              <h3 className="text-xl font-bold mb-2">Versioning</h3>
              <p className="text-gray-400">Keep track of snippet history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Release Intelligence / Downloads */}
      <section id="download" className="w-full bg-[#0e0e0e] py-20 px-6 border-t border-[#353534]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Get Coda</h2>
          <p className="text-gray-400 mb-10">Latest version: v1.0.0</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/Coda_1.0.0_x64-setup.exe" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Download .exe
            </a>
            <a href="/Coda_1.0.0_x64_en-US.msi" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Download .msi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
