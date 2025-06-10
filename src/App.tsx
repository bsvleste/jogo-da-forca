import { HangmanFigure } from "@/components/Hangman-figure";
import { WordDisplay } from "./components/Word-display";
import { Keyboard } from "./components/Keyboard";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-pink-500">Jogo da Velha</h1>
      <HangmanFigure reaminingGuesses={6} />
      <div className="text-center text-gray-200">
        <p className="mb-2 text-2xl sm:text-xl">
          Remaining guesses: <span className="font-bold">6</span>
        </p>
        <p className="text-2xl sm:text-xl">Tip: A dica é qualquer coisa</p>
      </div>
      <WordDisplay word="vercel" guessedLetters={new Set(["c", "r", "e"])} />
      <Keyboard guessedLetters={new Set(["c", "r", "e", "w"])} />
    </div>
  );
}

export default App;
