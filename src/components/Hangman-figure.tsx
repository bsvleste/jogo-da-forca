import { GUESSES } from "@/constants";
import { motion } from "motion/react";
type HangmanFigureProps = {
  reaminingGuesses: number;
};
export function HangmanFigure({ reaminingGuesses }: HangmanFigureProps) {
  const gallowsLine = [
    { x1: 40, y1: 180, x2: 150, y2: 180 },
    { x1: 60, y1: 20, x2: 60, y2: 180 },
    { x1: 58, y1: 20, x2: 140, y2: 20 },
    { x1: 138, y1: 20, x2: 138, y2: 40 },
  ];
  const partsBody = [
    { type: "line", id: "body", x1: 138, y1: 60, x2: 138, y2: 120 },
    { type: "line", id: "rigthArm", x1: 138, y1: 70, x2: 120, y2: 80 },
    { type: "line", id: "leftArm", x1: 138, y1: 70, x2: 160, y2: 80 },
    { type: "line", id: "rigthLeg", x1: 120, y1: 140, x2: 138, y2: 120 },
    { type: "line", id: "leftLeg", x1: 138, y1: 120, x2: 160, y2: 140 },
  ];
  return (
    <svg width={200} height={200} viewBox="0 0 200 200">
      {gallowsLine.map((line, index) => (
        <line key={index} {...line} className="stroke-gray-700 stroke-[4px]" />
      ))}
      <motion.circle
        cx="138"
        cy="50"
        r="10"
        className="fill-transparent stroke-pink-500 stroke-[2px]"
        initial={{ scale: 0 }}
        animate={{ scale: GUESSES - reaminingGuesses > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {partsBody.map((line, index) => (
        <motion.line
          key={line.id}
          {...line}
          className="stroke-pink-500 stroke-[2px]"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: GUESSES - reaminingGuesses > index + 1 ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </svg>
  );
}
