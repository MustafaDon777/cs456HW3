import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 0.01,
      image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL2C-A-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 0.03,
      image: 'https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E1_OnlineExclusive_SapphireBlue_Lockup_1600x1200.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 0.03,
      image: 'https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg',
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Calculate the total sum of the cart
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>Welcome to Crypto E-Commerce</h1>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '150px' }} />
            <h3>{product.name}</h3>
            <p>Price: {product.price} SOL</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Cart</h3>
      <div className="cart">
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price} SOL
            </li>
          ))}
        </ul>
        <h4>Total: {calculateTotal()} SOL</h4>
      </div>

      <Link to="/checkout" state={{ cart }}>
        <button>Go to Checkout</button>
      </Link>
    </div>
  );
};

export default Home;