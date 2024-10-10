// components/Popular.js

import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"
import five from "../assets/images/c7.jpg"
import six from "../assets/images/c5 (1).jpg"
import seven from "../assets/images/c6.jpg"
import eight from "../assets/images/c8.jpg"

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
        <div className="course-card">
          <img src={one} alt="Course 1" />
          <p>Basic to Advance Programming with EMC</p>
          <p>Agnel John</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>4999</del></p>
        </div>
        <div className="course-card">
          <img src={two} alt="Course 2" />
          <p>Web Development Bootcamp 2024</p>
          <p>Kalob Taulien</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
                <img src={three} alt=""/>
                <p>Master UI/UX Designing with Figma </p>
                <p>Andrei Neagoie</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>3999</del></p>

            </div>

            <div class="course-card">
                <img src={four} alt=""/>
                <p>2024 Python Data Visualisation Masterclass</p>
                <p>Dr. Angela Yu</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del>
                </p>

            </div>

            <div class="course-card">
                <img src={five} alt=""/>
                <p>Java for Beginners
                </p>
                <p>Navin Reddy</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del>
                </p>

            </div>

            <div class="course-card">
                <img src={six} alt=""/>
                <p>Modern PHP: The Complete Guide - from Beginner to Advanced</p>
                <p>Jannis Seemann</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>449 <del>4999</del>
                </p>

            </div>
            <div class="course-card">
                <img src={seven} alt=""/>
                <p>Wordpress for Beginners - Master Wordpress Quickly</p>
                <p>Andrew Williams</p>
                <p>3 ⭐⭐⭐</p>
                <p>449 <del>4999</del>
                </p>

            </div>

            <div class="course-card">
                <img src={eight} alt=""/>
                <p>React - The Complete Guide 2024 (incl. Next.js, Redux)</p>
                <p>Maximilian Schwarzmüller</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del>
                </p>

            </div>
        {/* Add more course cards */}
      </div>
    </div>
  );
}

export default Popular;
