import { Component, OnInit } from '@angular/core';
import questDataSport from '../quests/sport.json';
import questDataMeal from '../quests/meal.json';
import questDataBody from '../quests/bodyfeel.json';
import questDataSustainability from '../quests/sustainability.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  QuestsSport: any = questDataSport;
  QuestsMeal: any = questDataMeal;
  QuestsBody: any = questDataBody;
  QuestsSustainability: any = questDataSustainability;
  userName: string;
  userPoints: string;
  userPointsToday: string;
  userPointsYesterday: string;
  doneIdsSport: string;
  doneIdsbodyfeel: string;
  doneIdsmeal: string;
  doneIdssustainability: string;
  userNameIsSet: boolean;
  today: string;
  yyyymmdd;

  constructor() { }

  ngOnInit(): void {
    this.setOrSearchUsername();
    this.setOrGetPoints();
    this.setQuestsIfNotAlready();
    this.setOrGetPointsYesterday();
    this.setOrGetPointsToday();
    this.setOrGetdoneIdsSport();
    this.setOrGetdoneIdsbodyfeel();
    this.setOrGetdoneIdsmeal();
    this.setOrGetdoneIdssustainability();
    this.getDate();
  }

  getDate() {
    this.today = localStorage.getItem('date');
    if (this.today == null || this.today == "null") {
      this.today = (new Date().toISOString().substring(0, 10)).toString();
      localStorage.setItem('date', this.today);
    } else {
      if (this.today == (new Date().toISOString().substring(0, 10)).toString()) {
        console.log("no new quests set")
      } else {
        localStorage.setItem('oldDate', this.today);
        localStorage.setItem('date', (new Date().toISOString().substring(0, 10)).toString());
        this.deleteAllDoneIds();
        this.todayPointsToYesterday();
        this.setNewQuests();
      }
    }
  }

  setQuestsIfNotAlready() {
    let questChecker = localStorage.getItem('setNewQuestsSport');
    if (questChecker == null || questChecker == "null") {
      this.setNewQuests();
    }
  }

  setNewQuests() {
    let sportQuests = this.QuestsSport["quests"].length;
    let sportQuestsNumbers = []
    for (var i=0; i< sportQuests; i++) { sportQuestsNumbers[i] = Math.floor(Math.random() * ((sportQuests-1) - 0 + 1)) + 0; }
    localStorage.setItem('setNewQuestsSport', sportQuestsNumbers.toString())

    let mealQuests = this.QuestsMeal["quests"].length;
    let mealQuestsNumbers = []
    for (var i=0; i< mealQuests; i++) { mealQuestsNumbers[i] = Math.floor(Math.random() * ((mealQuests-1) - 0 + 1)) + 0; }
    localStorage.setItem('setNewQuestsMeal', mealQuestsNumbers.toString())

    let bodyQuests = this.QuestsBody["quests"].length;
    let bodyQuestsNumbers = []
    for (var i=0; i< bodyQuests; i++) { bodyQuestsNumbers[i] = Math.floor(Math.random() * ((bodyQuests-1) - 0 + 1)) + 0; }
    localStorage.setItem('setNewQuestsBody', bodyQuestsNumbers.toString())

    let sustainabilityQuests = this.QuestsSustainability["quests"].length;
    let sustainabilityQuestsNumbers = []
    for (var i=0; i< sustainabilityQuests; i++) { sustainabilityQuestsNumbers[i] = Math.floor(Math.random() * ((sustainabilityQuests-1) - 0 + 1)) + 0; }
    localStorage.setItem('setNewQuestsSustainability', sustainabilityQuestsNumbers.toString())
  }

  setOrSearchUsername() {
    this.userName = localStorage.getItem('UserName');
    if (this.userName == null || this.userName == "null" || this.userName == "Set Your Username") {
      localStorage.setItem('UserName', 'Set Your Username');
      this.userName = localStorage.getItem('UserName');
      this.userNameIsSet = false;
    } else {
      this.userNameIsSet = true;
    }
  }

  setUsername(userNameFromInput) {
    localStorage.setItem('UserName', userNameFromInput);
    this.userName = localStorage.getItem('UserName');
    this.userNameIsSet = true;
  }

  setOrGetPoints() {
    this.userPoints = localStorage.getItem('userPoints');
    if (this.userPoints == null) {
      localStorage.setItem('userPoints', '0');
      this.userPoints = localStorage.getItem('userPoints');
    } 
  }

  setOrGetPointsYesterday() {
    this.userPointsYesterday = localStorage.getItem('userPointsYesterday');
    if (this.userPointsYesterday == null) {
      localStorage.setItem('userPointsYesterday', '0');
      this.userPointsYesterday = localStorage.getItem('userPointsYesterday');
    } 
  }

  setOrGetPointsToday() {
    this.userPointsToday = localStorage.getItem('userPointsToday');
    if (this.userPointsToday == null) {
      localStorage.setItem('userPointsToday', '0');
      this.userPointsToday = localStorage.getItem('userPointsToday');
    } 
  }

  todayPointsToYesterday() {
    localStorage.setItem('userPointsYesterday', this.userPointsToday);
    localStorage.setItem('userPointsToday', '0');
  }

  setOrGetdoneIdsSport() {
    this.doneIdsSport = localStorage.getItem('doneIdsSport');
    if (this.doneIdsSport == null) {
      localStorage.setItem('doneIdsSport', '00000');
      this.doneIdsSport = localStorage.getItem('doneIdsSport');
    } 
  }

  setOrGetdoneIdsbodyfeel() {
    this.doneIdsbodyfeel = localStorage.getItem('doneIdsbodyfeel');
    if (this.doneIdsbodyfeel == null) {
      localStorage.setItem('doneIdsbodyfeel', '00000');
      this.doneIdsbodyfeel = localStorage.getItem('doneIdsbodyfeel');
    } 
  }

  setOrGetdoneIdsmeal() {
    this.doneIdsmeal = localStorage.getItem('doneIdsmeal');
    if (this.doneIdsmeal == null) {
      localStorage.setItem('doneIdsmeal', '00000');
      this.doneIdsmeal = localStorage.getItem('doneIdsmeal');
    } 
  }

  setOrGetdoneIdssustainability() {
    this.doneIdssustainability = localStorage.getItem('doneIdssustainability');
    if (this.doneIdssustainability == null) {
      localStorage.setItem('doneIdssustainability', '00000');
      this.doneIdssustainability = localStorage.getItem('doneIdssustainability');
    } 
  }

  deleteAllDoneIds() {
    localStorage.setItem('doneIdssustainability', '00000');
    localStorage.setItem('doneIdsmeal', '00000');
    localStorage.setItem('doneIdsbodyfeel', '00000');
    localStorage.setItem('doneIdsSport', '00000');
  }

  resetUserName() {
    localStorage.setItem('UserName', null);
    this.setOrSearchUsername()
  }

}
