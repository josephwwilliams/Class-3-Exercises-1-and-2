import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Input() allPosts;
  constructor() { }

  ngOnInit(): void {
  }

}
