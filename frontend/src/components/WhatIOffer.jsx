"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "./WhatIOffer.css";

export default function WhatIOffer() {


  const offers = [
    {
      image: "https://muscleandhealth.com/wp-content/uploads/2022/01/bodybuild.jpeg",
      title: "BODY BUILDING",
      description:
        "Strength, size, and structure — all tailored for your bodybuilding journey.",
      link: "/bodybuilding",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0744/0203/files/1.Header_e73db68e-cfdc-40cb-a330-e673b302a641.jpg?v=1705480606",
      title: "MUSCLE GAIN",
      description:
        "Muscle isn't built by chance — it's built by plan. Let's start yours.",
      link: "/musclegain",
    },
    {
      image: "https://tophealthdoctors.com.au/wp-content/uploads/2024/07/weight-loss.png",
      title: "WEIGHT LOSS",
      description:
        "Lose weight the right way — no shortcuts, just solid strategy.",
      link: "/weightloss",
    },
  ];

  return (
    <section className="what-i-offer">
      <h2 className="offer-title" >WHAT WE OFFER</h2>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer-card"
          >
              <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
