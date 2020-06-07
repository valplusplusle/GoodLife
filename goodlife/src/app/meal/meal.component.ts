import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  mealArray = [];

  constructor() { }

  ngOnInit(): void {
    this.mealArray[0] = new Quest;
    this.mealArray[1] = new Quest;
    this.mealArray[2] = new Quest;
  }


}

class Quest {
  mealName = 'veganer Heringssalat'
  mealLink = 'yqGtT0c5e2U'
}

