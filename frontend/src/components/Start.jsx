"use client";
import Link from "next/link";
import "./Start.css";

export default function Start() {
  return (
    <section className="highlight-section">
      <h2 className="highlight-heading">
        Achieve Your <span className="highlight-word">Fitness Goals</span> With One Click
      </h2>

      <div className="features image-container">
        <div className="side-image-wrapper">
          <img
            src="https://media.istockphoto.com/id/1447563207/photo/fitness-training-and-medicine-ball-with-people-in-gym-and-class-for-workout-health-and-sports.jpg?s=612x612&w=0&k=20&c=G1wkNL8IWyxSNsfuvYqDkR4ilwWp7Ck3fWvS_982zVk="   // <-- put your left image path here (e.g. public/images/left-gym.jpg)
            alt="Workout left"
            className="side-image"
          />
        </div>
        <div className="button-group">
          <Link href="/workouts" className="highlight-button">
            Explore Workout
          </Link>
          <Link href="/myPlan" className="highlight-button">
            Create Your Workout
          </Link>
          <Link href="/bmicalculator" className="highlight-button">
            Calculate BMI
          </Link>
          <Link href="/bmicalculator" className="highlight-button">
            Maintenance Calories
          </Link>
        </div>

        {/* Right Image */}
        <div className="side-image-wrapper">
          <img
            src="https://media.istockphoto.com/id/165824072/photo/group-of-people-using-different-gym-equipment.jpg?s=612x612&w=0&k=20&c=luof6a8Knnl0kUgQpsZgI1d1lU0YWAzaiod3qax4ncs="  // <-- put your right image path here
            alt="Workout right"
            className="side-image"
          />
        </div>
      </div>
    </section>
  );
}
