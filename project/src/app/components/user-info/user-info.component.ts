import { Component, Input } from '@angular/core';
import { UserModel } from 'models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() userData: UserModel;
}
