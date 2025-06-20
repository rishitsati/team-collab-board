import React, { useState } from 'react';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <BoardList onSelectBoard={setSelectedBoard} />
      <div style={{ marginLeft: '2rem', flex: 1 }}>
        {selectedBoard ? (
          <BoardDetail board={selectedBoard} />
        ) : (
          <h2>Select a board to view tasks</h2>
        )}
      </div>
    </div>
  );
}

export default App;
