import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
import "./navbar.css";

import { data } from "./books";
import SpecificBook from "./book";

function BookList() {
  return (
    <section>
      <div className="navbar">
        <a href="books">Books</a>
        <a href="advancedsearch">Advanced Search</a>
        <a href="newreleases">New Releases</a>
        <a href="bestsellersmore">Best Sellers & More</a>
        <a href="childrensbooks">Children's Books</a>
        <a href="textbooks">Text Books</a>
        <a href="textbookrentals">Text Book Rentals</a>
        <a href="bestbooksofthemonth">Best Books of the Month</a>
      </div>
      <div className="header">
        <p>Amazon Best Sellers of 2021 (So Far)</p>
        <h5>Our most popular product of the year. Updated daily.</h5>
      </div>
      <main className="booklist">
        {data.map((book, index) => {
          return <SpecificBook key={book.id} {...book}></SpecificBook>;
        })}
      </main>
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
