import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Fetch boards from backend
    axios.get(process.env.REACT_APP_API_URL + "/boards")
      .then((res) => {
        setBoards(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", borderRight: "1px solid #ccc", padding: "1rem" }}>
        <h3>Boards</h3>
        <ul>
          {boards.map((board) => (
            <li key={board._id}>{board.name}</li>
          ))}
        </ul>
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        <h1>Team Collaboration Board</h1>
        <p>Select a board to view tasks</p>
      </main>
    </div>
  );
}

export default App;
