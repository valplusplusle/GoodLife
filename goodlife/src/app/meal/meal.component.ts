import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('userIds');

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = new Quest;
    this.questArray[1] = new Quest;
    this.questArray[2] = new Quest;
  }
  addPointsAndDoneQuest(points, id) {
    let userPoints = localStorage.getItem('userPoints');
    userPoints = (parseInt(userPoints) + parseInt(points)).toString();
    localStorage.setItem('userPoints', userPoints);
    let actualIds = localStorage.getItem('userIds');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('userIds', actualIds);
    this.questDoneIds = localStorage.getItem('userIds');
  }
}

class Quest {
  questPoints = 'Veganer Heringsalat'
  questTitel = ''
  questText = ''
  questId = '0003'
  questPointsValue = '200'
}

