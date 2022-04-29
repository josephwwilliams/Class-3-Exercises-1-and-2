import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foodSearched
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map((params: Params ) => {
      this.foodSearched = ('the food you search for was ' + params['search'].toUpperCase())
    })).subscribe()
  }

}
