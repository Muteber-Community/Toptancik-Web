import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export const Nav = styled.nav`
   background: red /* linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)); */
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-direction: column;
`;

export const NavIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Bars = styled(AiOutlineUnorderedList)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  color: #fff;
`;
