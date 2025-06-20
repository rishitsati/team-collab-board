import React, { useState } from "react";
import axios from "axios";

export default function TaskCard({ task, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ ...task });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, form);
    setIsEditing(false);
    onUpdate();
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`);
      onUpdate();
    }
  };

  return (
    <div style={{
      border: "1px solid #ccc", margin: "0.5rem 0", padding: "0.5rem",
      background: "#f9f9f9"
    }}>
      {isEditing ? (
        <div>
          <input name="title" value={form.title} onChange={handleChange} /><br/>
          <textarea name="description" value={form.description} onChange={handleChange} /><br/>
          <select name="status" value={form.status} onChange={handleChange}>
            <option>To Do</option><option>In Progress</option><option>Done</option>
          </select><br/>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>Low</option><option>Medium</option><option>High</option>
          </select><br/>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h5>{task.title}  
            <span style={{
              background: task.priority === "High" ? "red" :
                          task.priority === "Medium" ? "orange" : "green",
              color: "#fff", padding: "2px 6px", borderRadius: "4px",
              fontSize: "0.8rem", marginLeft: "0.5rem"
            }}>
              {task.priority}
            </span>
          </h5>
          <p>{task.description}</p>
          <p><strong>Assigned:</strong> {task.assignedTo}</p>
          <p><strong>Due:</strong> {task.dueDate?.substring(0, 10)}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: "0.5rem" }}>Delete</button>
        </div>
      )}
    </div>
  );
}
