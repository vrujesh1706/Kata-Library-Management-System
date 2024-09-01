import { expect } from "chai";
import Library from "../src/library.js";

describe("Library Management System", function () {
  let library;

  beforeEach(function () {
    library = new Library();
  });

  describe("#addBook()", function () {
    it("should add a book to the library", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      expect(library.books.length).to.equal(1);
      expect(library.books[0]).to.deep.equal({
        isbn: "12345",
        title: "Node.js in Action",
        author: "Author A",
        publicationYear: 2024,
        isAvailable: true,
      });
    });
  });

  describe("#borrowBook()", function () {
    it("should mark a book as borrowed", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      library.borrowBook("12345" , "Node.js in Action");
      expect(library.books[0].isAvailable).to.be.false;
    });

    
  });

  describe("#returnBook()", function () {
    it("should mark a borrowed book as available", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      library.borrowBook("12345" , "Node.js in Action");
      library.returnBook("12345" , "Node.js in Action");
      expect(library.books[0].isAvailable).to.be.true;
    });
  });

  describe("#viewAvailableBooks()", function () {
    it("should return only available books", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      library.addBook("67890", "Learning JavaScript", "Author B", 2024);
      library.borrowBook("12345", "Node.js in Action");
      const availableBooks = library.viewAvailableBooks();
      expect(availableBooks.length).to.equal(1);
      expect(availableBooks[0]).to.deep.equal({
        isbn: "67890",
        title: "Learning JavaScript",
        author: "Author B",
        publicationYear: 2024,
        isAvailable: true,
      });
    });
  });

  describe('Sequential Operations of adding and borrowing books', function() {
    it('should correctly add and borrow books in sequence', function() {
      library.addBook('12345', 'Node.js in Action', 'Author A', 2024);
      library.borrowBook('12345' , 'Node.js in Action');
      expect(library.books[0].isAvailable).to.be.false;
  
      library.addBook('67890', 'Learning JavaScript', 'Author B', 2023);
      expect(library.books[1].isAvailable).to.be.true;
    });
  });

  describe('Handling Invalid ISBNs', function() {
    it('should throw an error when adding a book with an invalid ISBN', function() {
      expect(() => library.addBook('', 'Invalid Book', 'Author X', 2022)).to.throw('Invalid ISBN');
    });
  
    it('should throw an error when borrowing a book with an invalid ISBN', function() {
      expect(() => library.borrowBook('')).to.throw('Invalid ISBN');
    });
  
    it('should throw an error when returning a book with an invalid ISBN', function() {
      expect(() => library.returnBook('')).to.throw('Invalid ISBN');
    });
  });

  describe('Handling Invalid Titles', function() {
    it('should throw an error when adding a book with an invalid title', function() {
      expect(() => library.addBook('12345', '', 'Author A', 2024)).to.throw('Invalid title');
    });
  
    it('should throw an error when borrowing a book with an invalid title', function() {
      expect(() => library.borrowBook('12345' , '')).to.throw('Invalid title');
    });
  
    it('should throw an error when returning a book with an invalid title', function() {
      expect(() => library.returnBook('12345' ,'')).to.throw('Invalid title');
    });
  });
  
  


});
