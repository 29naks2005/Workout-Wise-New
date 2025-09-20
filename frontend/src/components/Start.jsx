"use client";
import { useEffect } from "react";
import Link from "next/link";
import "./Start.css";

export default function Start() {


  return (
    <section className="highlight-section">
      <h2 className="highlight-heading" >
        Achieve Your <span className="highlight-word">Fitness Goals</span> With One Click
      </h2>

      <div className="features image-container">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/007/662/087/large_2x/healthy-lifestyle-concept-horizontal-shot-of-motivated-fitness-woman-in-active-wear-poses-in-plank-pose-on-fitness-mat-exercises-outdoors-enjoys-regular-training-wears-sunglasses-at-summer-time-free-photo.JPG" 
          alt="Workout Highlight"
          className="highlight-image"
        />
        
        <Link href="/workouts" className="highlight-button">
          Start Now
        </Link>
      </div>
    </section>
  );
}
