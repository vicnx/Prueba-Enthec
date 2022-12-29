import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public userSelected: string;
  @Output() searchUser = new EventEmitter();
  constructor() {}

  public search(): void {
    this.searchUser.emit(this.userSelected);
  }
}
