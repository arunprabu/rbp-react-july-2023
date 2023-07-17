import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, url }) => {
  // receive props selectively using obj destructuring
  // console.log(props);
  /**
   * props are objects
   * props are read-only
   * props can also have children
   */

  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={url}>
        {title}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default MenuItem;
