import React from 'react';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,

  // ProductButton,
} from './ProductsElements';
import no_image from '../../images/no_image.jpg';
import './product.css';

const Products = ({ heading, data }) => {
  const allProductsButton = () => {
    if (heading === 'Öne Çıkanlar') {
      return (
        <a className='allProdButton' href='/products'>
          <span>Tüm Ürünler</span>
          <span className='prodIcon'>
            <FaArrowRight />
          </span>
        </a>
      );
    }
  };
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>

      <ProductWrapper>
        {data.map((product, index) => {
          let product_body = product.body.substr(0, 100);

          let decodedStr;
          if (product.pictures) {
            decodedStr = product.pictures[0];
          } else {
            decodedStr = no_image;
          }

          const dots_control = () => {
            let dots = document.getElementById('dots' + index);

            if (product_body.length > 99) {
              dots.style.display = 'inline';
            } else {
              dots.style.display = 'none';
            }
          };

          const readMore = () => {
            var moreText = document.getElementById('more' + index);
            var btnText = document.getElementById('myBtn' + index);
            var lessText = document.getElementById('less' + index);
            let dots = document.getElementById('dots' + index);

            if (btnText.innerHTML === 'Göster') {
              moreText.style.display = 'inline';
              btnText.innerHTML = 'Gizle';
              lessText.style.display = 'none';
            } else {
              btnText.innerHTML = 'Göster';
              lessText.style.display = 'inline';
              moreText.style.display = 'none';
            }
            if (product_body.length > 99) {
              if (moreText.style.display === 'inline') {
                dots.style.display = 'none';
              } else {
                dots.style.display = 'inline';
              }
            } else {
              dots.style.display = 'none';
            }
          };
          return (
            <ProductCard
              className='productCard'
              key={index}
              onLoad={dots_control}
            >
              <ProductTitle>{product.title}</ProductTitle>
              <ProductImg src={decodedStr} alt={product.alt} />

              <ProductInfo className='card_info'>
                <button
                  onClick={readMore}
                  id={'myBtn' + index}
                  className='read_more_button'
                >
                  Göster
                </button>
                <ProductDesc>
                  <div className='containerProductText'>
                    <span id={'less' + index}>{product_body}</span>
                    <span id={'more' + index} className='more'>
                      {product.body}
                    </span>
                    <span id={'dots' + index} className='dots'>
                      ...
                    </span>
                  </div>
                </ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>

                <ProductButton href='https://ty.gl/hcnos15'>
                  <span className='buy-icon'>
                    <FaShoppingCart />
                  </span>
                  <span> Satın Al</span>
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      {allProductsButton()}
    </ProductsContainer>
  );
};

export default Products;
