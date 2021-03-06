import React, { useState } from "react";
import { addBook } from "../firebaseConfig";

const AddBook = ({ updateState }) => {
  const [book, setBook] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(book);
      updateState();
      setBook({ title: "", author: "" });
      console.log(book);

      // const books = await getBooks();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        required
        onChange={handleChange}
        value={book.title}
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        required
        onChange={handleChange}
        value={book.author}
      />
      <button type="submit">add a new book</button>
    </form>
  );
};

export default AddBook;
