class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(isbn, title, author, year) {
      if (!isbn || typeof isbn !== 'string' || isbn.trim() === '') {
        throw new Error('Invalid ISBN');
      }
      if (!title || typeof title !== 'string' || title.trim() === '') {
        throw new Error('Invalid title');
      }
      if (this.books.some(book => book.isbn === isbn)) {
        throw new Error('Book with this ISBN already exists');
      }
      this.books.push({ isbn, title, author, publicationYear: year, isAvailable: true });
    }
  
    borrowBook(isbn , title) {
      if (!isbn || typeof isbn !== 'string' || isbn.trim() === '') {
        throw new Error('Invalid ISBN');
      }
      if (!title || typeof title !== 'string' || title.trim() === '') {
        throw new Error('Invalid title');
      }
      const book = this.books.find(book => book.isbn === isbn);
      if (!book) {
        throw new Error('Book not found');
      }
      if (!book.isAvailable) {
        throw new Error('Book is already borrowed');
      }
      book.isAvailable = false;
    }
  
    returnBook(isbn , title) {
      if (!isbn || typeof isbn !== 'string' || isbn.trim() === '') {
        throw new Error('Invalid ISBN');
      }
      if (!title || typeof title !== 'string' || title.trim() === '') {
        throw new Error('Invalid title');
      }
      const book = this.books.find(book => book.isbn === isbn);
      if (!book) {
        throw new Error('Book not found');
      }
      if (book.isAvailable) {
        throw new Error('Book was not borrowed');
      }
      book.isAvailable = true;
    }
      viewAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
      }
  
  }
  

  export default Library;