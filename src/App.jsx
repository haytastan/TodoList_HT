import React, { useState } from 'react';
import TodoList from './components/TodoList'; // TodoList bileþenini ithal edin

function App() {
    const [tasks, setTasks] = useState(["Drink some coffee", "Create a TODO app", "Drink some more coffee"]);
    const [newTaskText, setNewTaskText] = useState("");
    return (
        <>
            <TodoList />
        </>
    );
}

export default App;
