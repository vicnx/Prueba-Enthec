import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { LanguageFilter } from 'pipes/tableFilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, LanguageFilter],
  imports: [CommonModule, FormsModule],
  exports: [TableComponent],
})
export class SharedModule {}
