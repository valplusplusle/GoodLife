import { Component, OnInit } from '@angular/core';
import questData from '../quests/sustainability.json';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('doneIdssustainability');
  Quests: any = questData;
  taskdone = false;
  noMoreQuest = false;

  constructor() { }

  ngOnInit(): void {
    let numbers = localStorage.getItem('setNewQuestsSustainability');
    let convertedNumbers = numbers.split(",")
    console.log(convertedNumbers)
    this.questArray[0] = this.Quests["quests"][convertedNumbers[0]];
    this.questArray[1] = this.Quests["quests"][convertedNumbers[1]];
    this.questArray[2] = this.Quests["quests"][convertedNumbers[2]];
    this.testIfAllQuestsDone();
  }
  addPointsAndDoneQuest(points, id) {
    let userPoints = localStorage.getItem('userPoints');
    userPoints = (parseInt(userPoints) + parseInt(points)).toString();
    localStorage.setItem('userPoints', userPoints);

    let userPointsToday = localStorage.getItem('userPointsToday');
    userPointsToday = (parseInt(userPointsToday) + parseInt(points)).toString();
    localStorage.setItem('userPointsToday', userPointsToday);

    let actualIds = localStorage.getItem('doneIdssustainability');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdssustainability', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdssustainability');
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