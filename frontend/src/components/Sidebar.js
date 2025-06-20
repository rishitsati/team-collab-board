import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ onSelectBoard }) {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/boards`);
      setBoards(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createBoard = async () => {
    if (!newBoardName.trim()) return;
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/boards`, {
        name: newBoardName.trim(),
      });
      setNewBoardName("");
      fetchBoards();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <aside style={{ width: "220px", borderRight: "1px solid #ccc", padding: "1rem" }}>
      <h3>Boards</h3>
      <ul>
        {boards.map((board) => (
          <li key={board._id} style={{ cursor: "pointer" }} onClick={() => onSelectBoard(board._id)}>
            {board.name}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="New board name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <button onClick={createBoard} style={{ marginLeft: "0.5rem" }}>Add</button>
      </div>
    </aside>
  );
}
