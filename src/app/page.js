"use client";

import Link from "next/link";
import Header from "./components/Header";
import './styles/hero.css';  // Import your custom CSS file

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Header component */}
      <Header />

      {/* Hero Section */}
      <div className="hero-content">
        <div className="content-wrapper">
          <div className="text-center">
            <h1 className="hero-title">
              Elevate Your Skills with Our Comprehensive Online Courses
            </h1>
            <p className="hero-description">
              Learn from industry experts and advance your career with our on-demand courses.
            </p>

            {/* Call to Action Button */}
            <div className="cta-buttons">
              <Link href="/register" className="cta-button">
                Get started
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
