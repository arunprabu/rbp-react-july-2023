import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const cart = useSelector( (state) => state.cart);

  return (
    <header
      className="d-flex flex-wrap align-items-center 
      justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          Redux Toolkit App Demo
        </Link>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/counter" className="nav-link px-2">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link px-2">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link px-2">
            Products
          </NavLink>
        </li>
        <li>
          <button type="button" className="btn btn-danger">
            Cart ({cart.productList.length})
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
