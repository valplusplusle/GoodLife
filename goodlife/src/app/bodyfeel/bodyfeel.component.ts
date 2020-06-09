import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyfeel',
  templateUrl: './bodyfeel.component.html',
  styleUrls: ['./bodyfeel.component.scss']
})
export class BodyfeelComponent implements OnInit {
  questArray = [];

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = new Quest;
    this.questArray[1] = new Quest;
    this.questArray[2] = new Quest;
  }
}
class Quest {
  questPoints = 'Yoga'
  questTitel = ''
  questText = ''
}
