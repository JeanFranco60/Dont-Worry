import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { addProduct, removeProduct } from "../../redux/shoppingCartReducer";
import { FaTrash } from "react-icons/fa"; // Importar el icono de la papelera

export default function ShoppingCartList() {
  const { products } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  // Filtrar productos no deseados (por ejemplo, con un id específico)
  const filteredProducts = products.filter((product) => !product.default);

  return (
    <>
      <h2>Tu carrito</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const { price, qty, name, pic } = product;

          const totalPrice = (qty * price).toFixed(2);

          const incrementQuantity = () => {
            dispatch(addProduct({ ...product, qty: 1 }));
          };

          const decrementQuantity = () => {
            dispatch(removeProduct({ ...product, qty: 1 }));
          };

          return (
            <div
              className="container border rounded-4 card individual-product"
              key={product.id}
            >
              <div className="row">
                <div className="col-7">
                  <h4 className="mt-4">{name}</h4>
                  <img
                    src={`/img/${pic}`}
                    alt={product.name}
                    className="product-pic"
                  />
                </div>
                <div className="col-5 d-flex flex-column justify-content-center align-items-center">
                  <p className="mt-2">${totalPrice}</p>
                  <Form.Group className="mb-2 d-flex justify-content-center align-items-center">
                    <div className="d-flex border rounded-pill border-black m-3">
                      <div className="d-flex">
                        {qty > 1 ? (
                          <button
                            variant="rounded-end-circle"
                            className="btn rounded-pill border-0"
                            onClick={decrementQuantity}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            variant="rounded-end-circle"
                            className="btn rounded-pill border-0"
                            onClick={decrementQuantity}
                          >
                            <span className="m-0 p-0">
                              <FaTrash />
                            </span>
                          </button>
                        )}

                        <Form.Control
                          type="text"
                          value={qty}
                          className="no-hover"
                          readOnly
                        />
                        <Button
                          variant="rounded-end-circle"
                          className="btn rounded-pill border-0"
                          onClick={incrementQuantity}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay productos en el carrito de compras</p>
      )}
    </>
  );
}
