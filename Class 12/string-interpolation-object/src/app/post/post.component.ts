import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  info = {
    firstName:'Joe',
    lastName: 'Williams'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
