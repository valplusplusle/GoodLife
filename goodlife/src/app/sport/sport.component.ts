import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
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
  questPoints = '🚴 | 200 Punkte'
  questTitel = '"Ab aufs Rad!"'
  questText = 'Fahre heute 10km Fahrrad! '
  questId = '0001'
  questPointsValue = '200'
}
