import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cmp-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
@Input() msg: string;
@Input() showAlert: boolean;
@Output() cleanAlerts = new EventEmitter();

}
