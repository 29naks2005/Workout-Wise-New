"use client";
import { useState, useEffect } from "react";
import WorkoutForm from "@/components/WorkoutForm";
import "./Workoutpage.css"

export default function WorkoutPage() {
  const [plans, setPlans] = useState([]);

  async function handleWorkoutSubmit({ fitnessLevel, goal }) {

    console.log("Form data:", { fitnessLevel, goal });

    const res = await fetch(
      `http://localhost:3001/plans?level=${fitnessLevel}&goal=${goal}`
    );
    const data = await res.json();

    console.log("Fetched plans:", data);

    setPlans(data);
  }

  useEffect(() => {
    console.log("Plans state updated:", plans);
  }, [plans]);

  return (
    <div>
      <h1>Workout Plan Generator</h1>
      <WorkoutForm onSubmit={handleWorkoutSubmit} />
      <ul className="plans-list">
          {plans.map((plan) => (
          <li key={plan.id}>
              <strong>{plan.title}</strong> – {plan.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
