import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLorem = false;
  hold = [];

  adding(){
    this.showLorem = !this.showLorem;
    this.hold.push(this.hold.length + 1)
  }
}
