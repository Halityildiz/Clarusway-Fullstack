import React from "react";
import { HeaderContainer, MainHeader } from "./HeaderStyle";
import Form from "./Form";
const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      <MainHeader>Halatsar Food App</MainHeader>
      <img
        src="https://i.pinimg.com/564x/28/97/ab/2897abed43253781fa97f4f96ef1e7d5.jpg"
        style={{ width: "180px", height: "180px", borderRadius: "50%" }}
        alt="logo"
      />
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};
export default Header;
