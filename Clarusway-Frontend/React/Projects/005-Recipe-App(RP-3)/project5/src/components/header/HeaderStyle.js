import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
`;
export const MainHeader = styled.h2`
  margin-top: 1rem;
  letter-spacing: 3px;
  margin-bottom: 3rem;
  font-size: 3.5rem;
  color: #fff;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 20px;
  margin: 20px;
`;
export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 15px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;
export const Button = styled.button`
  background-color: #f9d423;
  /* background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%); */
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: #6e88d7;
    transition: all 0.3s ease-in;
    border: 2px solid white;
    color: #fff;
  }
`;
export const Select = styled.select`
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
