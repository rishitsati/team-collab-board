import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BoardDetail({ board }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/boards/${board._id}/tasks`)
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, [board]);

  return (
    <div>
      <h2>{board.name}</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['To Do', 'In Progress', 'Done'].map(status => (
          <div key={status} style={{ border: '1px solid #ddd', padding: '1rem' }}>
            <h4>{status}</h4>
            <ul>
              {tasks.filter(t => t.status === status).map(task => (
                <li key={task._id}>{task.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardDetail;
