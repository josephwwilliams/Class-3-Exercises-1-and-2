import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPosts = [{
    title: 'First Post #1', author: 'Joseph'
  }, {
    title: 'Second Post', author: 'Joe'
  }]
}
