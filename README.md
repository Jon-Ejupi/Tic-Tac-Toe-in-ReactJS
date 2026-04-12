React Tic-Tac-Toe

A modern, responsive Tic-Tac-Toe game built with React, TypeScript, and Tailwind CSS. This project demonstrates clean component architecture, state management, and utility-first styling.
🚀 Features

    Responsive Design: Styled with Tailwind CSS to look great on any screen size.

    Game Logic: Integrated win-detection algorithm that checks rows, columns, and diagonals.

    Interactive UI: Hover states, active feedback, and color-coded players (Blue for X, Red for O).

    TypeScript: Fully typed props and state for better developer experience and reliability.

    Reset Functionality: Easy one-click button to clear the board and restart the match.

🛠️ Tech Stack

    Framework: React

    Language: TypeScript

    Styling: Tailwind CSS

📂 Component Structure

    Square: A functional sub-component representing a single tile on the grid. It receives a value and a click handler via props.

    Board: The main component containing the game state (squares array), win logic (calculateWinner), and the layout grid.

🎨 Styling Highlights

The board uses a custom negative-margin technique to ensure consistent 1-pixel borders between squares without doubling the thickness when they touch:
HTML

<button className="border border-gray-400 -mr-[1px] -mt-[1px]">
  {value}
</button>

🎮 Getting Started

    npm run dev


    🌐 : https://tacreact.netlify.app/
