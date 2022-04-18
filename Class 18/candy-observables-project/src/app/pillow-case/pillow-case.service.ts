import { Injectable } from '@angular/core';
import { Candy } from '../models/candy/candy.module';

@Injectable({
  providedIn: 'root',
})
export class PillowCaseService {
  // Create a "Subject" that to emit when a new candy is added to bag

  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
    console.log('this.myCandies:', this.myCandies);
  }

  clearCandy() {
    this.myCandies = [];
  }
}
