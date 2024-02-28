// Sudoku.jsx

import React, { useState } from 'react';

function Sudoku() {
  const emptyGrid = Array(9).fill(Array(9).fill(0));
  const [grid, setGrid] = useState(emptyGrid);

  // Function to solve Sudoku using backtracking algorithm
  const solveSudoku = () => {
    const solvedGrid = [...grid];
    if (backtrack(solvedGrid)) {
      setGrid(solvedGrid);
    } else {
      alert('No solution exists for this Sudoku puzzle!');
    }
  };

  // Backtracking algorithm to solve Sudoku
  const backtrack = (grid) => {
    const emptyCell = findEmptyCell(grid);
    if (!emptyCell) {
      return true; // Puzzle solved
    }

    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;

        if (backtrack(grid)) {
          return true;
        }

        grid[row][col] = 0; // Backtrack
      }
    }

    return false; // No valid number found for this cell
  };

  // Function to find an empty cell in the grid
  const findEmptyCell = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null; // No empty cell found
  };

  // Function to check if a move is valid
  const isValidMove = (grid, row, col, num) => {
    return (
      isRowSafe(grid, row, num) &&
      isColSafe(grid, col, num) &&
      isBoxSafe(grid, row - (row % 3), col - (col % 3), num)
    );
  };

  // Function to check if the number is safe in the row
  const isRowSafe = (grid, row, num) => {
    return !grid[row].includes(num);
  };

  // Function to check if the number is safe in the column
  const isColSafe = (grid, col, num) => {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col] === num) {
        return false;
      }
    }
    return true;
  };

  // Function to check if the number is safe in the box
  const isBoxSafe = (grid, boxStartRow, boxStartCol, num) => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row + boxStartRow][col + boxStartCol] === num) {
          return false;
        }
      }
    }
    return true;
  };

  // Function to handle input change for each cell
  const handleCellChange = (row, col, e) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 9) {
      const updatedGrid = grid.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? value : c)) : r
      );
      setGrid(updatedGrid);
    }
  };

  // Function to render the Sudoku grid
  const renderGrid = () => {
    return (
      <table className="sudoku-grid">
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={cell || ''}
                    onChange={(e) => handleCellChange(i, j, e)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="sudoku-container">
  <h1 className="sudoku-title">Sudoku Solver</h1>
  {renderGrid()}
  <button className="solve-button" onClick={solveSudoku}>Solve Sudoku</button>
</div>

  );
}

export default Sudoku;
