import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() Results = new EventEmitter<any>();
  searchText = ''
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.Results.emit(this.searchText)
  }
}
