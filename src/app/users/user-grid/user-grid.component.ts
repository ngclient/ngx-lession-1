import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  dataSource: User[];
  events: Array<string> = [];
  constructor(private userServie: UserService) {
    this.dataSource = this.userServie.getUsers();
  }
  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
      this.events = [];
  }
  ngOnInit() {
  }

}
