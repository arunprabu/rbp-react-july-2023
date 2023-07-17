import PropTypes from "prop-types";

const Button = ({label, backgroundColor = 'aqua', onClick }) => {
  const style = {
    backgroundColor
  }
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};



Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
