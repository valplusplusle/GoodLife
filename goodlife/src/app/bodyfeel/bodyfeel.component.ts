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
    let actualIds = localStorage.getItem('doneIdsbodyfeel');
    actualIds = actualIds + ',' + id;
    localStorage.setItem('doneIdsbodyfeel', actualIds);
    this.questDoneIds = localStorage.getItem('doneIdsbodyfeel');
  }
}
