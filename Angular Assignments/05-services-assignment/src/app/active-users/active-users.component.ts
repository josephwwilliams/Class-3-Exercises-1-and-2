import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users=[]
  constructor (private usersService: UsersService,  private counterService: CounterService) {}

  ngOnInit(): void {
    this.users=this.usersService.activeUsers
  }

  onSetToInactive(id: number) {
    this.counterService.onSetToInactive(id);
  }
}
