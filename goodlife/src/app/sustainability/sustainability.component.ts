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
    5000);
  }
}