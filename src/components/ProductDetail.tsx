import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import { useCart } from '../context/cartContext';
import CartPopup from './CartPopup';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(productId!)
      .then((product: any) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <section className="max-width min-h-screen">
        <p>Loading...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="max-width min-h-screen">
        <p>Product not found.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-width min-h-screen">
        <p>Something went wrong: {error}</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <section className="max-width min-h-screen">
      <div className="flex flex-col sm:flex-row w-full gap-8 overflow-clip">
        <div className="w-full md:w-1/2 max-sm:flex-row-reverse flex flex-1 gap-1">
          <div className="w-1/4 flex flex-col gap-1">
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
            <img
              src={product.imageUrl}
              className="object-contain flex-1 w-full"
              alt=""
            />
          </div>
          <img src={product.imageUrl} className="w-3/4 object-contain" alt="" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div>
            <h1>{product.name}</h1>
            <p>£{product.price}</p>
          </div>
          <div className="flex gap-3 max-sm:h-48">
            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">White</p>
            </div>

            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">Grey</p>
            </div>

            <div className="flex-1">
              <img
                src={product.imageUrl}
                className="rounded-sm"
                alt={product.name}
              />
              <p className="text-center">Black</p>
            </div>
          </div>
          <div>size</div>
          <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      {showPopup && product && <CartPopup product={product} />}
    </section>
  );
};

export default ProductDetail;
