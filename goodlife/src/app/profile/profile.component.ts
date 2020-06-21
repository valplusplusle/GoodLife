import { Component, OnInit } from '@angular/core';
import questDataDaily from '../quests/daily.json';
import questDataMonthly from '../quests/monthly.json';
import questDataWeekly from '../quests/weekly.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  QuestsDaily: any = questDataDaily;
  QuestsWeekly: any = questDataWeekly;
  QuestsMonthly: any = questDataMonthly;
 
  userName: string;
  userPoints: string;
  userPointsToday: string;
  userPointsYesterday: string;

  doneIdsDaily: string;
  doneIdsWeekly: string;
  doneIdsMonthly: string;
  
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
    this.setOrGetDoneIds(this.doneIdsDaily, 'doneIdsDaily');
    this.setOrGetDoneIds(this.doneIdsWeekly, 'doneIdsWeekly');
    this.setOrGetDoneIds(this.doneIdsMonthly, 'doneIdsMonthly');
    this.getDate();
    this.resetWeekly();
    this.resetMonthly();
  }

  getDate() {
    this.today = localStorage.getItem('date');
    if (this.today == null || this.today == "null") {
      this.today = (new Date().toISOString().substring(0, 10)).toString();
      localStorage.setItem('date', this.today);
      localStorage.setItem('dateWeekly', (Math.round(+new Date()/1000)).toString());
      localStorage.setItem('dateMonthly', (Math.round(+new Date()/1000)).toString());
    } else {
      if (this.today == (new Date().toISOString().substring(0, 10)).toString()) {
        console.log("no new quests set")
      } else {
        localStorage.setItem('oldDate', this.today);
        localStorage.setItem('date', (new Date().toISOString().substring(0, 10)).toString());
        localStorage.setItem('doneIdsDaily', '00000');
        this.todayPointsToYesterday();
        this.setNewQuests();
      }
    }
  }

  resetWeekly() {
    let todayMinusWeek = (Math.round(+new Date()/1000)-(7*24*60*60)).toString();
    let dateQuestsWhereSet = localStorage.getItem('dateWeekly');
    if (todayMinusWeek > dateQuestsWhereSet) {
      localStorage.setItem('doneIdsWeekly', '00000');
    }
  }

  resetMonthly() {
    let todayMinusMonth = (Math.round(+new Date()/1000)-(30*7*24*60*60)).toString();
    let dateQuestsWhereSet = localStorage.getItem('dateMonthly');
    if (todayMinusMonth > dateQuestsWhereSet) {
      localStorage.setItem('doneIdsMonthly', '00000');
    }
  }

  setQuestsIfNotAlready() {
    let questChecker = localStorage.getItem('setNewDailyQuests');
    if (questChecker == null || questChecker == "null") {
      this.setNewQuests();
    }
  }

  setNewQuests() {
    this.setTheQuestsInStorage(this.QuestsDaily, 'setNewDailyQuests', 3);
    this.setTheQuestsInStorage(this.QuestsWeekly, 'setNewWeeklyQuests', 4);
    this.setTheQuestsInStorage(this.QuestsMonthly, 'setNewMonthlyQuests', 4);
  }

  setTheQuestsInStorage(QuestsObject, stoarageName, counter) {
  let quests = QuestsObject["quests"].length;
  let questsNumbers = []
  for (var i=0; i< counter; i++) {
     var number = Math.floor(Math.random() * ((quests-1) - 0 + 1)) + 0;
     while (questsNumbers.includes(number)) {
      number = Math.floor(Math.random() * ((quests-1) - 0 + 1)) + 0;
     }
     questsNumbers[i] = number;
  }
  localStorage.setItem(stoarageName, questsNumbers.toString())
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

  setOrGetDoneIds(doneIds, doneIdsStorageName,) {
    doneIds = localStorage.getItem(doneIdsStorageName);
    if (doneIds == null) {
      localStorage.setItem(doneIdsStorageName, '00000');
      doneIds = localStorage.getItem(doneIdsStorageName);
    } 
  }

  resetUserName() {
    localStorage.setItem('UserName', null);
    this.setOrSearchUsername()
  }

  invite() {
    let score = localStorage.getItem('userPoints');
    let textA = "https://wa.me/?text=Schau+mal+mein+aktueller+Highscore%3A+" 
    let textB = ".+Kannst+du+den+knacken%3F+https%3A%2F%2Fblank42.de%2Fgoodlife" 
    let text = textA + score.toString() + textB;
    return text;
  }

}
