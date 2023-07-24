import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsSlice";
import { useEffect } from "react";
import { addToCart } from "../cart/cartSlice";

const Products = () => {
  const productList = useSelector((state) => state.products.productList);
  console.log(productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="row">
      {productList?.map((product) => {
        return (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title} | {product.category}
                </h5>
                <p className="card-text">{product.description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
