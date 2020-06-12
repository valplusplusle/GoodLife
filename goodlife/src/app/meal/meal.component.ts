import { Component, OnInit } from '@angular/core';
import questData from '../quests/meal.json';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('doneIdsmeal');
  Quests: any = questData;
  taskdone = false;

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = this.Quests["quests"][0];
    this.questArray[1] = this.Quests["quests"][1];
    this.questArray[2] = this.Quests["quests"][2];
  }
  addPointsAndDoneQuest(points, id) {
    let userPoints = localStorage.getItem('userPoints');
    userPoints = (parseInt(userPoints) + parseInt(points)).toString();
    localStorage.setItem('userPoints', userPoints);
    let actualIds = localStorage.getItem('doneIdsmeal');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdsmeal', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdsmeal');
    setTimeout(() => 
    {
      this.taskdone=true;
    },
    100);
    setTimeout(() => 
    {
      this.taskdone=false;
    },
    5000);
  }
}
