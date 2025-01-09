import React, { useState, useEffect, useCallback } from "react";

const gridSize = 30;

interface SnakeSegment {
  x: number;
  y: number;
}

const initialSnake: SnakeSegment[] = [
  { x: 2, y: 2 },
  { x: 1, y: 2 },
  { x: 0, y: 2 },
];

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<SnakeSegment[]>(initialSnake);
  const [direction, setDirection] = useState<string>("RIGHT");
  const [food, setFood] = useState<SnakeSegment>(generateFood());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  function generateFood(): SnakeSegment {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  }

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    },
    [direction, gameOver]
  );

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      const head = snake[0];
      let newHead: SnakeSegment;

      switch (direction) {
        case "UP":
          newHead = { x: head.x, y: (head.y - 1 + gridSize) % gridSize };
          break;
        case "DOWN":
          newHead = { x: head.x, y: (head.y + 1) % gridSize };
          break;
        case "LEFT":
          newHead = { x: (head.x - 1 + gridSize) % gridSize, y: head.y };
          break;
        case "RIGHT":
          newHead = { x: (head.x + 1) % gridSize, y: head.y };
          break;
        default:
          return;
      }

      const newSnake = [newHead, ...snake.slice(0, snake.length - 1)];

      if (
        newSnake.some(
          (segment, index) =>
            index !== 0 && segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        clearInterval(interval);
        return;
      }

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateFood());
        setScore(score + 1);
        setSnake([newHead, ...snake]); // Grow the snake
      } else {
        setSnake(newSnake);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [snake, direction, food, score, gameOver]);

  const restartGame = () => {
    setSnake(initialSnake);
    setDirection("RIGHT");
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  const renderGrid = () => {
    const grid = [];

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const isSnake = snake.some(
          (segment) => segment.x === x && segment.y === y
        );
        const isFood = food.x === x && food.y === y;

        grid.push(
          <div
            key={`${x}-${y}`}
            className={`w-full h-full ${isSnake ? "bg-green-500" : ""} ${
              isFood ? "bg-red-500" : ""
            }`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        );
      }
    }
    return grid;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="relative flex flex-col h-full">
      <div className="absolute top-2 left-2 text-green-400 text-xs font-silk">
        Score: {score}
      </div>

      {gameOver ? (
        <div className="flex flex-col items-center my-auto pb-8">
          <h2 className="text-green-400 text-2xl mb-4 font-silk">Game Over</h2>
          <button
            onClick={restartGame}
            className="bg-green-400 text-black py-2 px-4 text-lg hover:bg-green-700 font-silk"
          >
            Restart
          </button>
        </div>
      ) : (
        <div
          className="grid gap-0 w-full h-full p-0 m-0 overflow-hidden"
          style={{
            maxWidth: "100%",
            aspectRatio: "1/1",
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {renderGrid()}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
