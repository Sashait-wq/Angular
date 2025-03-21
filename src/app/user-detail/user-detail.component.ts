import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnChanges, OnDestroy {
  @Input() users: { name: string; age: number; email: string }[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Зміни в UserDetailComponent:', changes);
  }

  ngOnDestroy() {
    console.log('UserDetailComponent знищено');
  }
}
