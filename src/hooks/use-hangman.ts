import { GAME_STATUS, GUESSES, WORDS } from "@/constants";
import { useState } from "react";

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return {
    word: WORDS[randomIndex].word.toLowerCase(),
    tip: WORDS[randomIndex].tip
  };
}
export function useHangman() {
  const [currentWord,setCurrentWord] = useState(getRandomWord())
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES)
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set())

  function onGuessLetter(letter: string) {
    if(gameStatus() !== GAME_STATUS.PLAYING || guessedLetters.has(letter)) return

    setGuessedLetters(prev => new Set([...prev, letter]))
    if(!currentWord.word.includes(letter)){
      setRemainingGuesses(prev=>prev-1)
    }
  }
  const isWinner = currentWord.word.split("").every(letter => guessedLetters.has(letter))
  function gameStatus() {
    if (isWinner) return GAME_STATUS.WON
    if (remainingGuesses === 0) return GAME_STATUS.LOST 
    return GAME_STATUS.PLAYING
  }
  function selectWord() {
    setCurrentWord(getRandomWord())
    setGuessedLetters(new Set())
    setRemainingGuesses(GUESSES)
  }
  return {
    word: currentWord.word,
    guessedLetters,
    onGuessLetter, 
    tip: currentWord.tip,
    remainingGuesses,
    gameStatus: gameStatus(),
    selectWord,
  };
}