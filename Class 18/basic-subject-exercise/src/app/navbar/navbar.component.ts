import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  log(){
    this.dataService.mySearch.next(this.search)
  }
}
