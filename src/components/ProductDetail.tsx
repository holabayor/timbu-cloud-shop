import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import { useCart } from '../context/cartContext';
import CartPopup from './CartPopup';
import FavouriteIcon from '../assets/icons/favorite.svg?react';
import DeliveryIcon from '../assets/icons/delivery.svg?react';

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

        <div className="w-full sm:w-1/3 md:w-1/2 flex flex-col">
          <div>
            <h1>{product.name}</h1>
            <p>£{product.price}</p>
          </div>
          <div className="flex gap-3 max-sm:h-48 ">
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
          <div className="space-y-2">
            <select
              className="w-full border-2 border-[#E6E8E6] p-1 md:p-2 focus:outline-0"
              name=""
              id=""
            >
              <option value="">Size</option>
              <option value="XL">XL</option>
            </select>
            <div className="flex items-center gap-2">
              <button
                className="btn-cart w-full py-1 md:py-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <FavouriteIcon
                width={40}
                height={40}
                className="bg-[#E6E8E6] rounded-sm max-sm:h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 ml-auto space-y-2">
        <h6 className="font-medium">Delivery</h6>
        <div className="bg-[#E6E8E6] p-2 md:p-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <DeliveryIcon width={24} height={24} /> July 7 - July 10
            </span>
            <span className="font-medium">£4.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#F15025]">Express</span>
            <span>1/3 days</span>
          </div>
        </div>
        <div className="bg-[#E6E8E6] p-2 md:p-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <DeliveryIcon width={24} height={24} /> July 7 - July 10
            </span>
            <span className="font-medium">£2.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#F15025]">Standard</span>
            <span>4/7 days</span>
          </div>
        </div>
      </div>
      {showPopup && product && <CartPopup product={product} />}
    </section>
  );
};

export default ProductDetail;
