import { useEffect } from "react";

const KEYS_ROWS = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
];
type KeyboardProps = {
  onGuessLetter: (letter: string) => void;
  guessedLetters: Set<string>;
};
const KEY_CLASSES = {
  guessed:
    "bg-gray-100 text-gray-500 cursor-not-allowed focus-within:bg-gray-100",
  notGuessed: "bg-gray-800 text-gray-200 hover:bg-pink-500 ",
};
export function Keyboard({ guessedLetters, onGuessLetter }: KeyboardProps) {
  function handleKeydown(event: KeyboardEvent) {
    const letter = event.key.toLowerCase();
    if (KEYS_ROWS.flat().includes(letter)) {
      onGuessLetter(letter);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onGuessLetter]);
  return (
    <div className="flex flex-col items-center gap-3">
      {KEYS_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1" role="row">
          {row.map((letter) => {
            const isGuessed = guessedLetters.has(letter);
            return (
              <button
                disabled={isGuessed}
                onClick={() => onGuessLetter(letter)}
                key={letter}
                className={`h-10 w-10 rounded text-2xl font-bold uppercase transition-colors focus-within:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-700 sm:h-8 sm:w-8 ${isGuessed ? KEY_CLASSES.guessed : KEY_CLASSES.notGuessed} `}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
