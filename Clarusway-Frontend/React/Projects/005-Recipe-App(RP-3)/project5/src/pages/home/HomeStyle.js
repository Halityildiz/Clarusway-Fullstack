import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background: #48c5ee;
  height: fit-content;
  /* padding: 5px; */
`;
export const RecipeCard = styled.div`
  height: 300px;
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 12px;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 10px 16px 20px rgba(0, 0, 0, 0.8);
    transition: all 0.4s ease-in;
  }
`;
export const RecipeImage = styled.img`
  height: 150px;
  width: 220px;
  border-radius: 10px;
`;
export const Button = styled.button`
  background-color: #00adb5;
  font-size: 16px;
  font-weight: bolder;
  padding: 5px 15px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 3px black;
    transition: all 0.3s ease-in;
    color: #fff;
  }
`;
export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;
