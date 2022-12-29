import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { LanguageFilter } from 'pipes/tableFilter.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [TableComponent, LanguageFilter, AlertComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [TableComponent, AlertComponent],
})
export class SharedModule {}
