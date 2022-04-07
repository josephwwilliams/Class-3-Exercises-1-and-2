import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() NumbersCheck = new EventEmitter<number[]>()

  numbers = []
  time= 0
  interval;
  on = false;

  constructor() { }

  ngOnInit(): void {
  }
  startGame() { if(this.on !== true) {
      this.on = true
      this.interval = setInterval(()=>this.adding(), 1000)
    } return
  }
  resetGame() {
    clearInterval(this.interval)
    this.time = 0
  }

  adding() {
    this.time +=1;
    this.numbers.push(this.time)
    this.NumbersCheck.emit(this.numbers)
  }
}
