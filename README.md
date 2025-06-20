# ✅ Team Collaboration Board

A simple, minimal Trello/Asana clone — manage boards & tasks with a clean UI.  
Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Live Demo

**Frontend (Vercel)**: https://vercel.com/rishit-satis-projects/team-collab-board  
**Backend (Render)**: http://dashboard.render.com/web/srv-d1aionumcj7s73fj5oc0/deploys/dep-d1aioo6mcj7s73fj5oh0
---

## 📌 Features

✅ Create multiple boards  
✅ Sidebar to switch between boards  
✅ Create, edit & delete tasks  
✅ Tasks grouped by status: `To Do`, `In Progress`, `Done`  
✅ Priority: `Low`, `Medium`, `High` (with color badges)  
✅ Assigned To, Description & Due Date  
✅ Basic responsive layout

**(Bonus, optional)**  
✅ Drag & Drop tasks (using `react-beautiful-dnd`)  
✅ Board/task search  
✅ Priority filter

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/team-collab-board.git
cd team-collab-board
| Method   | Endpoint            | Description            |
| -------- | ------------------- | ---------------------- |
| `GET`    | `/boards`           | Get all boards         |
| `POST`   | `/boards`           | Create a new board     |
| `GET`    | `/boards/:id/tasks` | Get tasks in a board   |
| `POST`   | `/boards/:id/tasks` | Create task in a board |
| `PUT`    | `/tasks/:id`        | Update task            |
| `DELETE` | `/tasks/:id`        | Delete task            |

