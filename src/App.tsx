import { HangmanFigure } from "@/components/Hangman-figure";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-pink-500">Jogo da Velha</h1>
      <HangmanFigure />
    </div>
  );
}

export default App;
