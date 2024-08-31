import { expect } from 'chai';
import Library from '../src/library.js'; 

describe('Library Management System', function() {
  let library;

  beforeEach(function() {
    library = new Library();
  });

  describe('#addBook()', function() {
    it('should add a book to the library', function() {
      library.addBook('12345', 'Node.js in Action', 'Author A', 2024);
      expect(library.books.length).to.equal(1);
      expect(library.books[0]).to.deep.equal({
        isbn: '12345',
        title: 'Node.js in Action',
        author: 'Author A',
        publicationYear: 2024,
        isAvailable: true
      });
    });
  });
  

});

