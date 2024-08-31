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
    
  
  }
  

  export default Library;