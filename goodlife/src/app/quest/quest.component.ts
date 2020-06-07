import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {

  questArray = [];

  constructor() { }

  ngOnInit(): void {
    this.questArray[0] = new Quest;
    this.questArray[1] = new Quest;
    this.questArray[2] = new Quest;
  }

}

class Quest {
  questPoints = '🚴 | 200 Punkte'
  questTitel = '"Ab aufs Rad!"'
  questText = 'Fahre heute 10km Fahrrad! '
}
