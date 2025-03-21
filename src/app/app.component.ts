import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: { name: string; age: number; email: string }[] = [
    { name: 'Sasha', age: 19, email: 'sasha19@gmail.com' },
    { name: 'Anna', age: 20, email: 'anna20@gmail.com' },
    { name: 'John', age: 25, email: 'john25@gmail.com' },
  ];

  selectedUser: any = null;

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
