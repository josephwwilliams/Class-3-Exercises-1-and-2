import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() Search: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  mySearch = ''
  update($event) {
    this.mySearch=$event
    this.Search.emit(this.mySearch)
  }

}
