import { Component } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    new User('Joseph', 1234),
    new User('Jordan', 2546)
  ]}
