import PropTypes from 'prop-types';

const CompanyInfo = ({ companyName }) => {
  return (
    <div>
      <h2>Company Info | Testing Props</h2>
      <h4 data-testid="companyName">Company Name: {companyName}</h4>
    </div>
  );
};

CompanyInfo.propTypes = {
  companyName: PropTypes.string
};

export default CompanyInfo;
