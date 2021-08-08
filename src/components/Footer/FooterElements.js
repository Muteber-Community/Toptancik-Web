import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section``;

export const SocialMediaWrap = styled.div`
  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const SocialIcons = styled.div``;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 0.7rem;
`;
