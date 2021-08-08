import styled from 'styled-components';
import FeaturePic from '../../images/Örnek_Ürün.jpeg';

export const FeatureContainer = styled.div`
  background-image: url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
export const FeatureText = styled.h1`
  margin-top: 18rem;
  color:#234065;
  }
`;
