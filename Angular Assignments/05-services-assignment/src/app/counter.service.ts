import { Injectable } from '@angular/core';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counting:number[]=[];
  constructor(private userService: UsersService) { }

  onSetToInactive(id: number) {
    this.userService.inactiveUsers.push(this.userService.activeUsers[id]);
    this.userService.activeUsers.splice(id, 1);
    this.counting.push(1)
  }

  onSetToActive(id: number) {
    this.userService.activeUsers.push(this.userService.inactiveUsers[id]);
    this.userService.inactiveUsers.splice(id, 1);
    this.counting.push(1)
  }
}
