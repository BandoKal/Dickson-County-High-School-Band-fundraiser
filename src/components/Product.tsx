import React from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    keepPrice: number;
    image: string;
};

interface ProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    keepPrice: number;
    image: string;
}

const Product: React.FC<ProductProps> = ({ name, image, description, price, keepPrice }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={`${process.env.PUBLIC_URL}/images/product-image-placeholder.jpg`} alt={name} width="200" /> 
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>You Keep: ${keepPrice}</p>
    </div>
  );
};

export default Product;
