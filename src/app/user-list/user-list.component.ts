import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Input() usersEmit: { name: string; age: number; email: string }[] = [];
  @Output() userSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    console.log('UserListComponent ініціалізовано');
  }

  selectUser(user: any) {
    this.userSelected.emit(user);
  }
}
