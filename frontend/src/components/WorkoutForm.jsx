"use client";
import { useState } from "react";
import "./WorkoutForm.css"; // 👈 yeh line add karna

export default function WorkoutForm({ onSubmit }) {
  const [fitnessLevel, setFitnessLevel] = useState("beginner");
  const [goal, setGoal] = useState("fat loss");


  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ fitnessLevel, goal});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <label>
        <span>Fitness Level:</span>
        <select
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label>
        <span>Goal:</span>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="fat loss">Fat Loss</option>
          <option value="muscle gain">Muscle Gain</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
