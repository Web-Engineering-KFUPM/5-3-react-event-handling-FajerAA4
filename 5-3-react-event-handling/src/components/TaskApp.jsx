import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const handleSubmit = () => {
        if(text.trim()){
            setTasks(prev => [...prev, { id: Date.now(), text }]);
            setText("")
        }
    };


    const handleDelete = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };


    const handleClearAll = () => {
        // TODO: set tasks to empty array
    };

    return (
        <section className="card">
            {/*Controlled Input */}
            <div className="inputRow">
                <input
                    type="text"
                    placeholder="Type a task..."
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
                <button className="btn btn--primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            {/*Render Task List and Enable Delete */}
            {/*Pass tasks and onDelete */}
            <TaskList tasks={tasks} onDelete={handleDelete}  />

            {/*Clear All */}
            <div className="footerRow">
                <button className="btn btn--ghost" onClick={handleClearAll}>
                    Clear All
                </button>
            </div>
        </section>
    );
}
