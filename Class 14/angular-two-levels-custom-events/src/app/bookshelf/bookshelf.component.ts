import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() SelectedBook = new EventEmitter<{title:string, author:string}>();

  selectedBook(eventData) {
    let book = {
      title:'',
      author: ''
    }
    book.title = eventData.title
    book.author = eventData.author
    this.SelectedBook.emit(book)
  }
  constructor() { }

  ngOnInit(): void {
  }



}
