class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(isbn, title, author, publicationYear) {
      this.books.push({
        isbn,
        title,
        author,
        publicationYear,
        isAvailable: true
      });
    }

    borrowBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && book.isAvailable) {
          book.isAvailable = false;
        }
      }
    
  
  }
  

  export default Library;