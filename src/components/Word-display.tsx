type WordDisplayProps = {
  word: string;
  guessedLetters: Set<string>;
};
export function WordDisplay({ word, guessedLetters }: WordDisplayProps) {
  return (
    <div className="flex flex-wrap space-x-4 sm:space-x-1">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="flex h-8 w-6 justify-center border-b-2 border-gray-200 pb-1 text-2xl font-bold uppercase text-gray-200 sm:h-12 sm:w-8"
        >
          {guessedLetters.has(letter) ? letter : ""}
        </div>
      ))}
    </div>
  );
}
