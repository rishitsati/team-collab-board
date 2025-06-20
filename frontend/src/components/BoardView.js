import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BoardView({ boardId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [boardId]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/boards/${boardId}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Group by status
  const statuses = ["To Do", "In Progress", "Done"];
  const grouped = {};
  statuses.forEach(status => {
    grouped[status] = tasks.filter(task => task.status === status);
  });

  return (
    <div>
      <h2>Tasks</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        {statuses.map(status => (
          <div key={status} style={{ border: "1px solid #ccc", padding: "1rem", flex: 1 }}>
            <h4>{status}</h4>
            {grouped[status].map(task => (
              <div key={task._id} style={{ border: "1px solid #ddd", margin: "0.5rem 0", padding: "0.5rem" }}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <small>Priority: {task.priority}</small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
