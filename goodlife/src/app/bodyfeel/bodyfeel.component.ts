import { Component, OnInit } from '@angular/core';
import questData from '../quests/bodyfeel.json';

@Component({
  selector: 'app-bodyfeel',
  templateUrl: './bodyfeel.component.html',
  styleUrls: ['./bodyfeel.component.scss']
})
export class BodyfeelComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('doneIdsbodyfeel');
  Quests: any = questData;
  taskdone = false;
  noMoreQuest = false;

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = this.Quests["quests"][0];
    this.questArray[1] = this.Quests["quests"][1];
    this.questArray[2] = this.Quests["quests"][2];
    this.testIfAllQuestsDone();
  }

  addPointsAndDoneQuest(points, id) {
    let userPoints = localStorage.getItem('userPoints');
    userPoints = (parseInt(userPoints) + parseInt(points)).toString();
    localStorage.setItem('userPoints', userPoints);

    let userPointsToday = localStorage.getItem('userPointsToday');
    userPointsToday = (parseInt(userPointsToday) + parseInt(points)).toString();
    localStorage.setItem('userPointsToday', userPointsToday);

    let actualIds = localStorage.getItem('doneIdsbodyfeel');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdsbodyfeel', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdsbodyfeel');
    setTimeout(() => 
    {
      this.taskdone=true;
    },
    100);
    setTimeout(() => 
    {
      this.taskdone=false;
    },
    3000);
    this.testIfAllQuestsDone();
  }

  testIfAllQuestsDone() {
    console.log(this.questDoneIds)
    if(this.questDoneIds.length == 23) {
      this.noMoreQuest = true;
    }
  }
}
