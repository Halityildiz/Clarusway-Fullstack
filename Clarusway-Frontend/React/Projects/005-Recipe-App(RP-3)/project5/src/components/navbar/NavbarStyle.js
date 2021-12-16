import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(to top, #6e88d7 0%, #f9d423 100%);

  height: 75px;
  font-size: 2rem;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 6px;
    width: 35px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 877px) {
    display: flex;
  }
`;
export const MenuLink = styled(Link)`
  padding: 1rem 0.8rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-out;
  font-size: 1.7rem;
  font-family: "Nunito", sans-serif;
  &:hover {
    color: #fff;
    font-weight: bolder;
    font-size: 2.5rem;
  }
  @media (max-width: 877px) {
    background-image: linear-gradient(to top, #6e88d7 0%, #f9d423 100%);
    border: 3px solid #fff;
    margin-bottom: 3px;
    border-radius: 50px;
    width: 90%;
    height: 80%;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 877px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    transition: max-height 0.5s ease-in;
  }
`;
export const Logo = styled(Link)`
  color: #393e46;

  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  img {
    font-family: "Nunito", sans-serif;
    vertical-align: middle;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: hsl(205, 63%, 48%);
    padding: 2px;
    &:hover {
    }
  }
  span {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
    vertical-align: middle;
  }
`;
