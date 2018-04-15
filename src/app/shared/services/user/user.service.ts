import { Injectable } from '@angular/core';
import { User } from './../../models/user';

// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';


const users: User[] = [
  {ID: 1, Username: 'ngoctran', Password: 'e10adc3949ba59abbe56e057f20f883e', RoleID: 1},
  {ID: 2, Username: 'ngoctran1', Password: 'e10adc3949ba59abbe56e057f20f883e', RoleID: 2},
  {ID: 3, Username: 'ngoctran2', Password: 'e10adc3949ba59abbe56e057f20f883e', RoleID: 0},
  {ID: 4, Username: 'ngoctran3', Password: 'e10adc3949ba59abbe56e057f20f883e', RoleID: 0},
  {ID: 5, Username: 'ngoctran4', Password: 'e10adc3949ba59abbe56e057f20f883e', RoleID: 2},
];

@Injectable()


export class UserService {
  private userUrl = 'api/users';
  private user: User;
  constructor() { }
  getUsers() {
    return users;
  }
}
