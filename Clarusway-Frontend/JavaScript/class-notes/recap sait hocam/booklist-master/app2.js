function createBook(title, author, isbn) {
    return {
        title : title,
        author : author,
        isbn : isbn
    };    
}


const title = document.querySelector('#title');
const author = document.querySelector('#tauthor');
const isbn = document.querySelector('#isbn');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookIsbn = isbn.value;
    const book = createBook(bookTitle, bookAuthor, bookIsbn);
    console.log(book);
    if (book) {
        
    }

})
