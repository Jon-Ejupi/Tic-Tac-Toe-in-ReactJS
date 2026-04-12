import { useState } from 'react';

interface SquaresProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquaresProps) {
  return (
    <button
      className="h-20 w-20 border border-gray-400 text-3xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none -mr-[1px] -mt-[1px]"
      onClick={onSquareClick}
    >
      <span className={value === 'X' ? 'text-blue-600' : 'text-red-600'}>
        {value}
      </span>
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squaresC: (string | null)[]) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squaresC[a] && squaresC[a] === squaresC[b] && squaresC[a] === squaresC[c]) {
        return squaresC[a];
      }
    }
    return null;
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner 
    ? `Winner: ${winner}` 
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Status Bar */}
      <div className="mb-6 text-2xl font-bold text-gray-800 bg-white px-6 py-2 rounded-lg shadow-sm border border-gray-200">
        {status}
      </div>

      {/* The Board */}
      <div className="inline-block bg-white shadow-xl">
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      {/* Reset Button */}
      <button 
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-md"
        onClick={() => setSquares(Array(9).fill(null))}
      >
        Reset Game
      </button>
    </div>
  );
}