import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeImg, MainContainer, ImgDiv } from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";
const APP_ID = "1b3fbc57";
const APP_KEY = "36a7b0a7ccc42c6f0b4758d555edb51b";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      console.log(result.data.hits);
      if (result.data.more) {
        console.log("no food a this name");
      }
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      console.log("Please fill the form");
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv style={{ backgroundColor: "#48c5ee" }}>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};
export default Home;
