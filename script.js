let myLibrary = [];

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 765, true);
let book2 = new Book('Game of Thrones', 'G.R.R. Martin', 1241, false);
let book3 = new Book('Harry Potter and Sorcerers Stone', 'J.K. Rowling', 475, true);
let book4 = new Book('Dune', 'Frank Herbert', 936, true);

myLibrary.push(book1, book2, book3, book4);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bookDetail = document.getElementById('book-detail');
bookDetail.addEventListener('submit', addBookToLibrary);

function addBookToLibrary() {
    console.log(typeof bookDetail);
}

function displayAllBooks() {
    let booksContainer = document.querySelector('.books-container');
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add("card");

        let title = document.createElement('div')
        title.className = 'book-details';
        let title_p1 = document.createElement('p');
        title_p1.textContent = 'Title';
        let title_p2 = document.createElement('p');
        title_p2.textContent = myLibrary[i].title;

        title.appendChild(title_p1);
        title.appendChild(title_p2);
        card.appendChild(title);

        let author = document.createElement('div')
        author.className = 'book-details';
        let author_p1 = document.createElement('p');
        author_p1.textContent = 'Author';
        let author_p2 = document.createElement('p');
        author_p2.textContent = myLibrary[i].author;

        author.appendChild(author_p1);
        author.appendChild(author_p2);
        card.appendChild(author)

        let pages = document.createElement('div')
        pages.className = 'book-details';
        let pages_p1 = document.createElement('p');
        pages_p1.textContent = 'Number of Pages';
        let pages_p2 = document.createElement('p');
        pages_p2.textContent = myLibrary[i].pages;

        pages.appendChild(pages_p1);
        pages.appendChild(pages_p2);
        card.appendChild(pages)

        let read_status = document.createElement('div')
        read_status.className = 'book-details';
        let read_status_p1 = document.createElement('p');
        read_status_p1.textContent = 'Read Status';
        let read_status_p2 = document.createElement('p');

        if (myLibrary[i].read === true) {
            
            let p2_btn = document.createElement('button');
            p2_btn.setAttribute('type', 'button');
            p2_btn.className = 'read';
            p2_btn.textContent = 'Read';

            read_status_p2.appendChild(p2_btn);
            read_status.appendChild(read_status_p1);
            read_status.appendChild(read_status_p2);
            card.appendChild(read_status)
        } else {
            let p2_btn = document.createElement('button');
            p2_btn.setAttribute('type', 'button');
            p2_btn.className = 'not-read';
            p2_btn.textContent = 'Not-Read';

            read_status_p2.appendChild(p2_btn);
            read_status.appendChild(read_status_p1);
            read_status.appendChild(read_status_p2);
            card.appendChild(read_status)
        }

        let remove = document.createElement('button');
        remove.setAttribute('type', 'button');
        remove.className = 'remove-book';
        remove.setAttribute('id', `index-${i}`);
        remove.textContent = 'Remove'

        card.appendChild(remove);

        booksContainer.appendChild(card);
    }
}
displayAllBooks();

function resetBookshelf() {
    let bookshelf = document.querySelector('.books-container');
    bookshelf.innerHTML = "";
}

let removeButtons = document.querySelectorAll('.remove-book');
removeButtons.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeBookFromLibrary);
});

function removeBookFromLibrary(e) {
    let idOfBookToBeRemoved = e.target.id;
    let indexOfBookToBeRemoved = idOfBookToBeRemoved[idOfBookToBeRemoved.length - 1];
    console.log(indexOfBookToBeRemoved);
    console.log(myLibrary);
    myLibrary.splice(indexOfBookToBeRemoved, 1);
    console.log(myLibrary);
    resetBookshelf();
    displayAllBooks();
}