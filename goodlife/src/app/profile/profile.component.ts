import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName: string;
  userPoints: string;
  userIds: string;
  userNameIsSet: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setOrSearchUsername();
    this.setOrGetPoints();
    this.setOrGetdoneIds();
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

  setOrGetdoneIds() {
    this.userIds = localStorage.getItem('userIds');
    if (this.userIds == null) {
      localStorage.setItem('userIds', '0000');
      this.userIds = localStorage.getItem('userIds');
    } 
  }

  resetUserName() {
    localStorage.setItem('UserName', null);
    this.setOrSearchUsername()
  }

}
