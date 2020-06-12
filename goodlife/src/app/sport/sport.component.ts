import { Component, OnInit } from '@angular/core';
import questData from '../quests/sport.json';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  questArray = [];
  questDoneIds = localStorage.getItem('doneIdsSport');
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
    let actualIds = localStorage.getItem('doneIdsSport');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdsSport', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdsSport');
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