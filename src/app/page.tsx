import GameBoard from "@/components/GameBoard";

export default function Home() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="heading-1">Name The City</h1>
        <p className="text-muted">Test your knowledge of the world&apos;s most iconic cities.</p>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <GameBoard />
      </main>
    </div>
  );
}
