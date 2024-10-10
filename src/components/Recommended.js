// components/Recommended.

import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
        {/* Course Card 1 */}
        <div className="course-card">
          <img src={one} alt="Course 1" />
          <p>Basic to Advance Programming with EMC</p>
          <p>Agnel John</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>4999</del></p>
        </div>
        {/* Course Card 2 */}
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

        
        {/* Add more course cards */}
      </div>
    </div>
  );
}

export default Recommended;
