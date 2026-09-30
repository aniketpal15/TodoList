import "./Todo.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todolist() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [{ task: "Learn React & CSS Animations", id: uuidv4(), done: false }];
    } catch {
      return [{ task: "Learn React & CSS Animations", id: uuidv4(), done: false }];
    }
  });

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    setTodos((prev) => [{ task: trimmed, id: uuidv4(), done: false }, ...prev]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleStartEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.task);
  };

  const handleSaveEdit = (id) => {
    const trimmed = editText.trim();
    if (trimmed) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, task: trimmed } : t))
      );
    }
    setEditingId(null);
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const completedCount = todos.filter((t) => t.done).length;
  const progress = todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100);
  const remainingCount = todos.filter((t) => !t.done).length;

  return (
    <>
      <div className="blobs">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

      <div className="todo-wrapper">
        <div className="todo-header">
          <h1 className="todo-title">
            <span className="sparkle-icon">✨</span> My Tasks
          </h1>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle light/dark theme"
          >
            <span className={`theme-icon ${theme === "dark" ? "theme-moon" : "theme-sun"}`}>
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>
        </div>

        <div className="progress-section">
          <div className="progress-labels">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <form className="todo-input-form" onSubmit={handleAdd}>
          <input
            className="todo-input"
            placeholder="Add a new task..."
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="todo-add-btn" type="submit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add
          </button>
        </form>

        <div className="todo-filters">
          {["all", "active", "completed"].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${filter === tab ? "active" : ""}`}
              onClick={() => setFilter(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="todo-list-container">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <span className="empty-emoji">
                {filter === "completed" ? "🎯" : "🎉"}
              </span>
              <p>
                {filter === "completed"
                  ? "No completed tasks yet!"
                  : filter === "active"
                  ? "No active tasks, you're all caught up!"
                  : "No tasks yet! Add one above to get started."}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <button
                  className={`todo-checkbox ${todo.done ? "checked" : ""}`}
                  onClick={() => handleToggle(todo.id)}
                  aria-label="Toggle completed"
                >
                  {todo.done && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>

                <div className="todo-text-wrap" onDoubleClick={() => handleStartEdit(todo)}>
                  {editingId === todo.id ? (
                    <input
                      className="todo-edit-input"
                      autoFocus
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => handleSaveEdit(todo.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSaveEdit(todo.id);
                        if (e.key === "Escape") setEditingId(null);
                      }}
                    />
                  ) : (
                    <span
                      className={`todo-text ${todo.done ? "done" : ""}`}
                      title="Double click to edit"
                    >
                      {todo.task}
                    </span>
                  )}
                </div>

                <button
                  className="todo-delete-btn"
                  onClick={() => handleDelete(todo.id)}
                  aria-label="Delete task"
                  title="Delete task"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="todo-footer">
          <span>{remainingCount} {remainingCount === 1 ? "task" : "tasks"} left</span>
          {completedCount > 0 && (
            <button className="clear-completed-btn" onClick={handleClearCompleted}>
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Todolist;
