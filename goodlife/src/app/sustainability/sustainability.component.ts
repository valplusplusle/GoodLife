import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent implements OnInit {
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
  questPoints = 'Trinke heute nur Wasser'
  questTitel = ''
  questText = ''
  questId = '0004'
  questPointsValue = '200'
}