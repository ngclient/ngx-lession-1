import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

const users: Array<any> = [
  { 'userName': 'admin', 'passWord': 'admin' }
];

@Injectable()
export class AuthserviceService {

  constructor(private httpClient: HttpClient) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  isAuthentication(formData) {
    return this.httpClient.post('/api/authenticate', formData)
      .subscribe(success => {
        console.log(success);
        if (success) return true;
      }, (err) => {
        console.log(err);
        if (err) return false;
      })
  }
}
