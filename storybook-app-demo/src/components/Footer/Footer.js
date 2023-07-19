import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ copyrightYear, companyName, alignment }) => {
  return (
    <footer className={`text-${alignment}`}>
      <hr />
      <p>
        Copyright {copyrightYear} | {companyName}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  copyrightYear: PropTypes.string,
  companyName: PropTypes.string,
  alignment: PropTypes.string,
};

export default Footer;
