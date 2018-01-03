import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <div *ngIf="users">
      <div *ngFor="let user of users">
        <h2>{{user.first_name}}</h2>
      </div>
    </div>  
  `
})
export class AppComponent implements OnInit{
  users : User[];

  message = 'This is the sample message.';

  constructor(private http: Http){

  }

  ngOnInit(){
    //grab users
    this.http.get('https://reqres.in/api/users')
      .map(res => res.json().data)
      .subscribe(users => this.users = users);
  }
}