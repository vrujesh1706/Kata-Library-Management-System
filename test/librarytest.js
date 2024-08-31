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
      library.borrowBook("12345");
      expect(library.books[0].isAvailable).to.be.false;
    });

    it("should not borrow a book that is not available", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      library.borrowBook("12345");
      library.borrowBook("12345");
      expect(library.books[0].isAvailable).to.be.false;
    });
  });

  describe("#returnBook()", function () {
    it("should mark a borrowed book as available", function () {
      library.addBook("12345", "Node.js in Action", "Author A", 2024);
      library.borrowBook("12345");
      library.returnBook("12345");
      expect(library.books[0].isAvailable).to.be.true;
    });
    
  });
});
