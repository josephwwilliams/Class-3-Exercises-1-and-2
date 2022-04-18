import { PillowCaseService } from './../pillow-case/pillow-case.service';
import { CandyStoreService } from './candy-store.service';
import { Component, OnInit } from '@angular/core';
import { Candy } from '../models/candy/candy.module';

@Component({
  selector: 'app-candy-store',
  templateUrl: './candy-store.component.html',
  styleUrls: ['./candy-store.component.css'],
})
export class CandyStoreComponent implements OnInit {
  // Create local Subscription

  candiesForSale: Candy[] = [];

  constructor(
    private candyStoreService: CandyStoreService,
    private pillowCaseService: PillowCaseService
  ) {}

  ngOnInit(): void {
    this.candiesForSale = this.candyStoreService.getCandiesForSale();
    // Subscribe to the a Subject on candyStore and store in a local Subscription
  }

  onSaveCandyToBag(candyName: string): void {
    this.pillowCaseService.addNewCandy(candyName);
  }

  onNewDelivery() {
    this.candyStoreService.addFiveCandies();
  }
}
