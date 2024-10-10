
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChalkboardTeacher, faMobileAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <div className="footer">
      <div className="footer__one">
        <div className="footer__one__s1">
          <p><FontAwesomeIcon icon={faBriefcase} /> Udemy Business</p>
          <p><FontAwesomeIcon icon={faChalkboardTeacher} /> Teach on Udemy</p>
          <p><FontAwesomeIcon icon={faMobileAlt} /> Get the app</p>
          <p><FontAwesomeIcon icon={faInfoCircle} /> About Us</p>
        </div>
        <div className="footer__one__s2">
          <p>Careers</p>
          <p>Blog</p>
          <p>Help and Support</p>
          <p>Affiliate</p>
          <p>Investors</p>
        </div>
      </div>
      <div className="footer__two">
        <h1>Udemy</h1>
        <p>&copy; Udemy, Inc</p>
      </div>
    </div>
  );
}

export default Footer;
