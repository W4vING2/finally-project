class Book{
    title: string
    author: string
    year: number

    constructor(title:string, author:string, year:number){
        this.title = title
        this.author = author
        this.year = year
    }

    Getinfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`)
    }
}
const bookd = new Book('гарри поттер', 'не знаю', 455);
bookd.Getinfo()

const first = new Book('впппк', 'праопапр', 52)
const second = new Book('gege wepe', 'праопаdaadadadadр', 51)
let MyBooks = [first, second]

class Library{
    books: Array<Book>;

    constructor(books: Array<Book>){
        this.books = books
    }
    addBook(book:Book){
        this.books.push(book)
    }
    listBooks(){
        for(const list of MyBooks){
            list.Getinfo()
        }
    }
}
let myLibrary = new Library(MyBooks)
myLibrary.listBooks()




