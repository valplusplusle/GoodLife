import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName: string;
  userPoints: string;
  doneIdsSport: string;
  doneIdsbodyfeel: string;
  doneIdsmeal: string;
  doneIdssustainability: string;
  userNameIsSet: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setOrSearchUsername();
    this.setOrGetPoints();
    this.setOrGetdoneIdsSport();
    this.setOrGetdoneIdsbodyfeel();
    this.setOrGetdoneIdsmeal();
    this.setOrGetdoneIdssustainability();
  }

  setOrSearchUsername() {
    this.userName = localStorage.getItem('UserName');
    if (this.userName == null || this.userName == "null") {
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

  resetUserName() {
    localStorage.setItem('UserName', null);
    this.setOrSearchUsername()
  }

}
