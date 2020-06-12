import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
      console.log(this.today)
      localStorage.setItem('date', this.today);
    } else {
      if (this.today == (new Date().toISOString().substring(0, 10)).toString()) {
        console.log("no new quests set")
      } else {
        localStorage.setItem('oldDate', this.today);
        localStorage.setItem('date', (new Date().toISOString().substring(0, 10)).toString());
        this.deleteAllDoneIds();
        this.todayPointsToYesterday();
      }
    }
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
