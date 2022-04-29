import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  interval = interval(1000)
  subscribe: Subscription
  constructor() { }

  ngOnInit(): void {
    this.subscribe = this.interval.pipe(filter(num => num % 2 ===0)).subscribe(res => console.log(res))
  }

  ngOnDestroy(): void {
      this.subscribe.unsubscribe()
  }
}
