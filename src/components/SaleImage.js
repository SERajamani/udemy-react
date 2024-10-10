// components/SaleImage.js
import one from "../assets/images/sale-image.jpg"
function SaleImage() {
  return (
    <div className="sale-image">
      <img src={one} alt="Sale" />
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 Hours to save</h2>
        <p>Get the top Courses for just 499rs. Just one day to save a lifetime to learn</p>
      </div>
    </div>
  );
}

export default SaleImage;
