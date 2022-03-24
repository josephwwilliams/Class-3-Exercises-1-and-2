import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.css']
})
export class ButtonInputComponent implements OnInit {
  username = '';
  empty = true
  constructor() {

  }

  ngOnInit(): void {
  }

  deletes () {
    this.username = '';
  }

}
