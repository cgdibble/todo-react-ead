import React from "react";

function allTodosComplete(todos) {
  return todos.every(t => t.complete);
}

export default function ToggleButton({ todos, toggleAllComplete }) {
  const selected = allTodosComplete(todos) && todos.length ? "selected" : "";
  return (
    <div
      className={`better-toggle-all ${selected}`}
      onClick={toggleAllComplete}
    >
      <span>❯</span>
    </div>
  );
}
