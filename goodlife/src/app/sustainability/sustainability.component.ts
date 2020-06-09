import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent implements OnInit {

  questArray = [];

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = new Quest;
    this.questArray[1] = new Quest;
    this.questArray[2] = new Quest;
  }

}

class Quest {
  questPoints = 'Trinke nur Wasser'
  questTitel = ''
  questText = ''
}