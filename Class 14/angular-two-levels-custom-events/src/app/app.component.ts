import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bookInfo= {
    title:'',
    author:''
  }
  bookDetails(data) {
    this.bookInfo.title=data.title
    this.bookInfo.author=data.author
  }

}
