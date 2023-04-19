import React from 'react';
import "./Product.css"

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
        <div className="product__info">
            <p className='product__title'>{title}</p>
            <p className="product__price">
                <small>R$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
              <p>⭐</p>
              ))}
            </div>
        </div>
        <img src={image} alt=''/>
        <button>Adicionar ao Carrinho</button>
     </div>
  )
}

export default Product
