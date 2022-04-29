import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'basic-subject-exercise';
  searchResutls: string;
  subscription: Subscription
  constructor(private data: DataService){}

  ngOnInit(): void {
    this.subscription = this.data.mySearch.pipe(filter(res => res !== 'hat'),map(res => res = 'You searched for '+res)).subscribe(res => this.searchResutls = res)
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
