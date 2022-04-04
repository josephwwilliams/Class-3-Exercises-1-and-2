import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../Book/book';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<any>();
  books: Book[] = [
    new Book('Book1','Joe'),
    new Book('Book2','Jay')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  clickBook(book) {
    this.bookSelected.emit(book)
  }
}
