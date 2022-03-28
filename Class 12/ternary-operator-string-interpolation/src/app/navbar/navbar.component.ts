import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = true;
  logged = this.loggedIn ? "I am logged in!" : "I am logged out!"

  constructor() { }

  ngOnInit(): void {
  }

}
