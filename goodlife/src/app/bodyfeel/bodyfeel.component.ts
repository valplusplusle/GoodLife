import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyfeel',
  templateUrl: './bodyfeel.component.html',
  styleUrls: ['./bodyfeel.component.scss']
})
export class BodyfeelComponent implements OnInit {
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
  questPoints = 'Yoga'
  questTitel = ''
  questText = ''
  questId = '0002'
  questPointsValue = '200'
}
