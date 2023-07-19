import PropTypes from 'prop-types';

const Button = ({ label, primary, size }) => {
  
  const btnStyles = {
    backgroundColor: primary ? "aqua" : "white",
    border: "solid 1px",
    borderColor: primary ? "aqua" : "black",
    padding: (size === 'large')? '25px 35px': '10px 20px'
  };

  return (
    <button type="button" style={btnStyles}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.string
};

export default Button;
