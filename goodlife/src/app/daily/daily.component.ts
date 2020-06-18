import { Component, OnInit } from '@angular/core';
import questDataDaily from '../quests/daily.json';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('doneIdsDaily');
  Quests: any = questDataDaily;
  taskdone = false;
  noMoreQuest = false;
  
  constructor() { }

  ngOnInit(): void {
    let numbers = localStorage.getItem('setNewDailyQuests');
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

    let actualIds = localStorage.getItem('doneIdsDaily');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdsDaily', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdsDaily');
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
