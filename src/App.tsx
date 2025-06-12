import { HangmanFigure } from "@/components/Hangman-figure";
import { WordDisplay } from "./components/Word-display";
import { Keyboard } from "./components/Keyboard";
import { GameModal } from "./components/Game-modal";
import { useHangman } from "./hooks/use-hangman";

function App() {
  const {
    gameStatus,
    word,
    tip,
    remainingGuesses,
    guessedLetters,
    onGuessLetter,
    selectWord,
  } = useHangman();
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-pink-500">Jogo da Velha</h1>
      <HangmanFigure reaminingGuesses={remainingGuesses} />
      <div className="text-center text-gray-200">
        <p className="mb-2 text-2xl sm:text-xl">
          Remaining guesses:{" "}
          <span className="font-bold">{remainingGuesses}</span>
        </p>
        <p className="text-2xl sm:text-xl">Tip: {tip}</p>
      </div>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} onGuessLetter={onGuessLetter} />
      <GameModal
        gameStatus={gameStatus}
        word={word}
        onNewWord={selectWord}
        key={1}
      />
    </div>
  );
}

export default App;
