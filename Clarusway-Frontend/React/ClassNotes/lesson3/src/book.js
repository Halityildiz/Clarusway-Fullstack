import React from "react";

const Book = ({ img, title, author, price }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    // console.log(e.target);
    alert(`${title}`);
  };
  const complexExample = (author) => {
    // console.log(author);
    alert(`${author}`);
  };
  return (
    <article
      className="book"
      // onMouseOver={() => {
      //   console.log(title);
      // }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Title
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Author
      </button>
      <div className="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <i class="fas fa-lira-sign lira">
        <span className="price"> {price}</span>
      </i>
    </article>
  );
};

export default Book;
